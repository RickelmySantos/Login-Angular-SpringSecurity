import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <div class="container" #container>
            <section class="flex-container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Cadastre-se</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use seu email para efetuar o login</span>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button>Cadastrar</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use sua conta</span>
                        <input type="text" placeholder="Nome" />
                        <input type="password" placeholder="Senha" />
                        <a href="#">Esquece sua senha?</a>
                        <button>Entrar</button>
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
    imports: [],
})
export class LoginComponent {
    @ViewChild('container') container!: ElementRef;

    onSignUp(): void {
        this.container.nativeElement.classList.add('right-panel-active');
    }
    onSignIn(): void {
        this.container.nativeElement.classList.remove('right-panel-active');
    }
}
