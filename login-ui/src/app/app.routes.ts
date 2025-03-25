import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/modules/core/auth/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
        children: [
            { path: '', loadComponent: () => import('./modules/Login/Login.component').then(m => m.LoginComponent) },
            { path: 'home', canActivate: [AuthGuard], loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent) },
        ],
    },
] as Route[];
