import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
        children: [
            { path: '', loadComponent: () => import('./modules/Login/Login.component').then(m => m.LoginComponent) },
            { path: 'home', loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent) },
        ],
    },
] as Route[];
