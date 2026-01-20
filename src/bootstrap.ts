// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import DashboardComponent from './app/shared/dashboard/dashboard.component';

// Import all exposed components

// Configuration for all exposed components
const EXPOSED_COMPONENTS = [
  {component: DashboardComponent, selector: 'app-dashboard'},
];

export async function initElements() {
  try {
    console.log('Starting mfe19 elements registration...');
    
    // Check if all components are already registered
    const allRegistered = EXPOSED_COMPONENTS.every(item => 
      customElements.get(item.selector)
    );
    
    if (allRegistered) {
      console.log('All mfe19 elements already registered');
      return;
    }

    const appRef = await createApplication(appConfig);
    const injector = appRef.injector;

    // Register all components
    const registrationPromises = EXPOSED_COMPONENTS.map(async (item) => {
      if (!customElements.get(item.selector)) {
        try {
          const element = createCustomElement(item.component, { injector });
          customElements.define(item.selector, element);
          // console.log(`✅ ${item.selector} registered`);
          return { selector: item.selector, success: true };
        } catch (error) {
          console.error(`❌ Failed to register ${item.selector}:`, error);
          return { selector: item.selector, success: false, error };
        }
      }
      return { selector: item.selector, success: true, skipped: true };
    });

    const results = await Promise.all(registrationPromises);
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const skipped = results.filter(r => r.skipped).length;
    
    console.log(`Registration complete: ${successful} successful, ${failed} failed, ${skipped} skipped`);
    
  } catch (error) {
    console.error('Error in initCentralElements:', error);
  }
}

// Auto-init for development/standalone
if (typeof window !== 'undefined' && !window.name.includes('microfrontend')) {
  initElements();
}