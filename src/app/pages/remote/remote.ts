import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, ComponentRef, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remote',
  imports: [],
  template : `<div #remoteV19></div>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Remote implements AfterViewInit, OnInit, OnDestroy {

  
  // Input parameters for remote-workbench. You can either use and include this as a separate UI Component inside your component.
  @Input() remotePath: string = "http://localhost:5000/remoteEntry.json";
  @Input() componentName: string = "MfeCompComponent";
  @Input() customElementTag: string = "app-mfe-comp";
  @Input() inputData?: any;

  // Output event emitter
  @Output() viewContainerRefReady: EventEmitter<ComponentRef<any>> = new EventEmitter<ComponentRef<any>>();
  
  @ViewChild('remoteV19', { static: true }) containerRef!: ElementRef;

  private componentRef: any = null;
  private element: any = null;

  // injection
  router = inject(Router);
  route = inject(ActivatedRoute);
  // toastService = inject(ToastService);
  // utilityService = inject(UtilityService);

  async ngAfterViewInit() {
    await this.loadRemoteComponent();

    // Watch for route changes in the HOST and push them to the REMOTE
    // this.route.params.subscribe(params => {
    //   if (this.element) {
    //     const code = params['moduleWise']; 
    //     if (code) {
    //       this.element.moduleWiseInput = code; // Set Property
    //       this.element.setAttribute('module-wise-input', code); // Set Attribute
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private async loadRemoteComponent() {
    try {
      console.log(`🔄 Loading remote  from ${this.remotePath}`);
      
      // Load the remote module
      const module = await loadRemoteModule({
        remoteEntry: this.remotePath,
        exposedModule: './bootstrap', // or './bootstrap' if that's what's exposed
      });

      // if(environment.ENV.Mode == "D"){
      //   console.log('✅ Remote module loaded:', module);
      //   console.log('Module keys:', Object.keys(module));
      //   console.log('Module type:', typeof module);
      //   console.log('Module keys:', Object.keys(module)[0]);
      //   console.log('Module has WorkbenchComponent?', 'WorkbenchComponent' in module);
      //   console.log('Module has default?', 'default' in module);
      //   console.log('Module:', module);
      // }

     await this.loadViaCustomElement();

    } catch (error) {
      console.error(`❌ Error loading remote component:`, error);
      this.fallbackToErrorComponent();
    }
  }

  private async loadViaCustomElement() {
    try {
      console.log('🔄 Trying to load as custom element...');
      
      // Wait for custom element registration
      await this.waitForElementRegistration(this.customElementTag);
      this.element = document.createElement(this.customElementTag);

      // Add the toast listeners
      this.toastEventListeners()
  
      // Initial data push
      const code = this.route.snapshot.params['moduleWise'];
      if (code) {
        this.element.moduleWiseInput = code;
      }
      console.log(`✅ ${code}`)

      // Listen for the custom event from the remote for "URL HANDLING" !!!
      this.element.addEventListener('workflowNavigation', (event: any) => {
          const { url, queryParams } = event.detail;
          
          // Use the Host Router to navigate
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate([url], { queryParams });
          });
      });

      this.containerRef.nativeElement.appendChild(this.element);
      
      // Create the custom element
      // const container = this.containerRef.nativeElement;
      // container.innerHTML = '';
      
      // const element = document.createElement('app-workbench');
      
      // Set attributes if needed
      // if (this.inputData) {
      //   Object.keys(this.inputData).forEach(key => {
      //     const value = this.inputData[key];
      //     if (value !== null && value !== undefined) {
      //       element.setAttribute(key, value.toString());
      //     }
      //   });
      // }
      
      // container.appendChild(element);
      // console.log(`✅ Custom element created: app-workbench`);

      // Pass all parameters as attributes
      // await this.setElementAttributes();
      // if (!element) return;

      // Set main parameters as attributes
      // if (this.moduleId) {
      //   element.setAttribute('moduleId', this.moduleId);
      // }
      
      // const container = this.containerRef.nativeElement;

      // Append to container
      // container.appendChild(element);
      // 
      
    } catch (error) {
      console.error('❌ Error loading as custom element:', error);
      throw error;
    }
  }

  toastEventListeners(){
    this.element.addEventListener('remoteSuccessToast', (event: any) => {
      const { summary, detail } = event.detail;
      // Call the Host's actual ToastService
      // this.toastService.notifySuccess(summary,detail)
    });

    this.element.addEventListener('remoteErrorToast', (event: any) => {
      const { summary, detail } = event.detail;
      // Call the Host's actual ToastService
      // this.toastService.notifyError(summary,detail)
    });

    this.element.addEventListener('remoteInfoToast', (event: any) => {
      const { summary, detail } = event.detail;
      // Call the Host's actual ToastService
      // this.toastService.notifyinfo(summary,detail)
    });
  }

  private waitForElementRegistration(elementName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (customElements.get(elementName)) {
        resolve();
        return;
      }
      
      const maxAttempts = 50; // 5 seconds max
      let attempts = 0;
      
      const checkInterval = setInterval(() => {
        attempts++;
        
        if (customElements.get(elementName)) {
          clearInterval(checkInterval);
          resolve();
          console.log(`✅ Custom element ${elementName} registered after ${attempts} attempts`);
        } 
        else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          reject(new Error(`Custom element ${elementName} not registered after ${maxAttempts} attempts`));
        }
      }, 100);
    });
  }

  private fallbackToErrorComponent() {
    const container = this.containerRef.nativeElement;
    container.innerHTML = `
      <div style="padding: 20px; border: 2px solid #dc3545; background: #f8d7da; color: #721c24; margin: 10px;">
        <h4>❌ Error Loading Remote Component</h4>
        <p><strong>${this.componentName}</strong> failed to load from:</p>
        <p><code>${this.remotePath}</code></p>
        <hr>
        <p><strong>Troubleshooting steps:</strong></p>
        <ol>
          <li>Ensure remote app is running on port 5000</li>
          <li>Check if <a href="${this.remotePath}" target="_blank">remoteEntry.json</a> is accessible</li>
          <li>Verify federation configuration in remote app</li>
          <li>Check browser console for CORS errors</li>
        </ol>
        <button onclick="location.reload()" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Retry Loading
        </button>
      </div>
    `;
  }

  private cleanup() {
    if (this.componentRef) {
      // Clean up component instance if needed
      this.componentRef = null;
    }
    
    const container = this.containerRef.nativeElement;
    container.innerHTML = '';
  }

}
