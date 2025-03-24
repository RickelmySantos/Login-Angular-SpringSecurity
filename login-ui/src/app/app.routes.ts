import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
        children: [{ path: 'login', loadComponent: () => import('./modules/Login/Login.component').then(m => m.LoginComponent) }],
    },
] as Route[];
