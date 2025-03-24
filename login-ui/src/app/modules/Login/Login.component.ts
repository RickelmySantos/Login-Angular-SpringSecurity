import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <header>
            <h1>Your Logo</h1>
        </header>

        <main>
            <section class="container">
                <div class="wrapper-container">
                    <!-- Coluna esquerda -->
                    <aside class="left-panel">
                        <h2>Sign in to</h2>
                        <p class="lorem">Lorem Ipsum is simply</p>

                        <p>If you don't have an account register</p>
                        <p>
                            You can
                            <a href="#">Register here !</a>
                        </p>

                        <img src="/assets/images/background-login.png" alt="Pessoa com celular" />
                    </aside>

                    <!-- Coluna direita -->
                    <article class="right-panel">
                        <h2>Sign in</h2>

                        <form action="#" method="post">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter email or user name" required />

                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" required />

                            <a href="#">Forgot password?</a>

                            <button type="submit">Login</button>

                            <p>or continue with</p>
                            <div class="social-icons">
                                <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                                <a href="#"><img src="apple-icon.png" alt="Apple" /></a>
                                <a href="#"><img src="google-icon.png" alt="Google" /></a>
                            </div>
                        </form>
                    </article>
                </div>
            </section>
        </main>
    `,
    styles: [' :host{display: block;}'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [],
})
export class LoginComponent {}
