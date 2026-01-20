// import { initFederation } from '@angular-architects/native-federation';

// // initFederation('federation.manifest.json')
// initFederation()
//   .catch(err => console.error(err))
//   .then(_ => import('./bootstrap'))
//   .catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { initFederation } from '@angular-architects/native-federation';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const isRemoteApp = 
  window.location.search.includes('remote') || 
  window.name.includes('microfrontend') ||
  (window !== window.top);

console.log(`MFE 19 app starting in ${isRemoteApp ? 'REMOTE' : 'STANDALONE'} mode`);

if (isRemoteApp) {
  initFederation().then(_ => import('./bootstrap')).catch(err => console.error('❌ Federation init error:', err));
} else {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error('❌ Bootstrap error:', err));
}