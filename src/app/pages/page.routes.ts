import { Routes } from '@angular/router';

export const pgroutes: Routes = [
    {
        path: 'intro',
        loadComponent: () => import('./introduction/introduction').then(m => m.Introduction),
    }
];
