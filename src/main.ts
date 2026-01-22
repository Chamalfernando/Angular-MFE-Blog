// import { initFederation } from '@angular-architects/native-federation';

// // initFederation('federation.manifest.json')
// initFederation()
//   .catch(err => console.error(err))
//   .then(_ => import('./bootstrap'))
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { initFederation } from '@angular-architects/native-federation';
import { App } from './app/app';
import { appConfig } from './app/app.config';

const isRemoteApp = 
  window.location.search.includes('remote') || 
  window.name.includes('microfrontend') ||
  (window !== window.top);

console.log(`MFE 20 app starting in ${isRemoteApp ? 'REMOTE' : 'STANDALONE'} mode`);

if (isRemoteApp) {
  initFederation().then(_ => import('./bootstrap')).catch(err => console.error('❌ Federation init error:', err));
} else {
  bootstrapApplication(App, appConfig).catch(err => console.error('❌ Bootstrap error:', err));
}