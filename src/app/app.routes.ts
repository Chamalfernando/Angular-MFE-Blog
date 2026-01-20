import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent:()=>import('../app/shared/dashboard/dashboard.component'),
    },
    {
        path: 'micro',
        loadComponent:()=>import('../app/shared/layout/layout.component'),
    },
        {
        path: 'microfrontend',
        loadComponent:()=>import('../app/pages/mfe-demo/mfe-demo.component'),
    },
];
