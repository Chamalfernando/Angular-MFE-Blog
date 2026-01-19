import { Routes } from '@angular/router';

export const pageroutes: Routes = [
    {
        path:'',
        loadComponent: () => import('../pages/prime-demo/prime-demo.component').then(m => m.PrimeDemoComponent)
    }
];
