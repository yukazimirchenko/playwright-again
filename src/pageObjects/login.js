
export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = this.page.getByLabel('Username');
        this.password = this.page.getByLabel('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(url, user, pwd) {
        await this.page.goto(url);
        await this.username.fill(user);
        await this.password.fill(pwd);
        await this.loginButton.click();
    }; 
} 