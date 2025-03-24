import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./Login.component').then(m => m.LoginComponent),
    },
] as Route[];
