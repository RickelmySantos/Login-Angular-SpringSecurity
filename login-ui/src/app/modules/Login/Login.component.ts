import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <!-- <section class="container">
            <div class="left-section">
                <div class="logo">Your Logo</div>
                <h1 class="text-2xl">Sign in to</h1>
                <p class="subtitle">Lorem Ipsum is simply</p>
                <p>If you don’t have an account register</p>
                <p>
                    You can
                    <a href="#">Register here !</a>
                </p>
                <div class="illustration">
                    <img src="/assets/images/background-login.png" alt="Character" />
                </div>
            </div>

            <div class="right-section">
                <form class="login-form">
                    <h2 class="">Sign in</h2>
                    <input type="text" placeholder="Enter email or user name" />
                    <input type="password" placeholder="Password" />
                    <a href="#" class="forgot">Forgot password?</a>
                    <button type="submit">Login</button>
                    <p class="continue">or continue with</p>
                    <div class="social-login">
                        <img src="facebook-icon.png" alt="Facebook" />
                        <img src="apple-icon.png" alt="Apple" />
                        <img src="google-icon.png" alt="Google" />
                    </div>
                </form>
            </div>
        </section> -->
        <section class="flex flex-column flex-1 h-screen border-1">
            <div>
                <span class="text-2xl">Sua Logo</span>
            </div>
            <div class="border-1 margin-auto">
                <div>
                    <h1>Sign in to</h1>
                    <p>Lorem Ipsun is simple</p>
                    <p>If you don't have an account register</p>
                    <p>
                        You can
                        <a href="#">Register here !</a>
                    </p>
                </div>
            </div>
        </section>
    `,
    styles: [' :host{display: block;}'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [],
})
export class LoginComponent {}
