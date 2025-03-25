import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private readonly router: Router = inject(Router);
    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
