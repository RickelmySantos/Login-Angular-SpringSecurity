import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: 'home',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    },
] as Route[];
