import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'prime',
        loadChildren: () => import('../pages/pages.routes').then(m => m.pageroutes)
    }
];
