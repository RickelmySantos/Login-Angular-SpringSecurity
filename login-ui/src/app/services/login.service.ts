import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
    private readonly API_URL = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<{ username: string; token: string }> {
        return this.http.post<{ username: string; token: string }>(`${this.API_URL}/login`, { username, password });
    }

    register(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.API_URL}/cadastrar`, usuario);
    }
}
