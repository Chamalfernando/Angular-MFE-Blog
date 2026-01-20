import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent:() => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'page',
        loadChildren: () => import('./pages/page.routes').then(m => m.pgroutes),
    },
    {
        path: 'mfe1',
    }
];
