import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'dashboard',
        loadComponent:() => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'micro',
        loadComponent: () => import('./pages/remote/remote').then(m => m.Remote),
    }
];
