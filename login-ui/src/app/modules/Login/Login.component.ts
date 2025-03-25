import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    template: `
        <div class="container" #container>
            <section class="flex-container">
                <div class="form-container sign-up-container">
                    <form [formGroup]="registerForm" (ngSubmit)="onRegister()">
                        <h1>Cadastre-se</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use seu email para efetuar o login</span>
                        <input type="text" placeholder="Nome" formControlName="username" />
                        <input type="email" placeholder="Email" formControlName="email" />
                        <input type="password" placeholder="Senha" formControlName="password" />
                        <button type="submit" [disabled]="registerForm.invalid">Cadastrar</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
                        <h1>Login</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use sua conta</span>
                        <input type="text" placeholder="Nome" formControlName="username" />
                        <input type="password" placeholder="Senha" formControlName="password" />
                        <a href="#">Esquece sua senha?</a>
                        <button type="submit" [disabled]="loginForm.invalid">Entrar</button>
                    </form>
                </div>
                <section class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Para manter-se conectado conosco, faça login com suas informações pessoais</p>
                            <button class="ghost" id="signIn" (click)="onSignIn()">Entrar</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Olá, Amigo!</h1>
                            <p>Insira seus dados pessoais e comece sua jornada conosco</p>
                            <button class="ghost" id="signUp" (click)="onSignUp()">Cadastrar</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    `,
    styles: [' :host{display: block;}'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [ReactiveFormsModule],
})
export class LoginComponent {
    private readonly loginService: LoginService = inject(LoginService);
    private readonly fb: FormBuilder = inject(FormBuilder);
    private readonly router: Router = inject(Router);

    @ViewChild('container') container!: ElementRef;

    loginForm: FormGroup;
    registerForm: FormGroup;

    constructor() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSignUp(): void {
        this.container.nativeElement.classList.add('right-panel-active');
    }
    onSignIn(): void {
        this.container.nativeElement.classList.remove('right-panel-active');
    }
    onLogin(): void {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            this.loginService.login(username, password).subscribe({
                next: response => {
                    alert('Login realizado com sucesso!');
                    this.router.navigate(['/home']);
                },
                error: error => {
                    console.log(error);
                },
            });
        }
    }
    onRegister(): void {
        if (this.registerForm.valid) {
            const { username, email, password } = this.registerForm.value;
            const usuario: Usuario = { username, email, password };
            this.loginService.register(usuario).subscribe({
                next: response => {
                    alert('Usuário cadastrado com sucesso!');
                    this.onSignIn();
                },
                error: error => {
                    console.log(error);
                },
            });
        }
    }
}
