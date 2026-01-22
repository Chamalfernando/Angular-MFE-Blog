import { ApplicationConfig, NgZone, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), // <--- ADD THIS
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: initializeApp,
    //     deps: [ConfigService],
    //     multi: true,
    // },
    // providePrimeNG({theme: {preset: primeIndigo}}),
    // { provide: NgZone, useValue: (window as any).ngZone }
    // providePrimeNG({
    //     theme: {
    //         preset: Aura
    //     }
    // }),
    // MessageService,
    // ConfirmationService
  ]
};
