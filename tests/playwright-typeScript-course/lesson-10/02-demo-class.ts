class LoginPage {
    usernameLoc: string;
    passwordLoc: string;
    rememberMeLoc: string;
    btnLoginLoc: string;

    constructor(
        usernameLoc: string, 
        passwordLoc: string, 
        rememberMeLoc: string, 
        btnLoginLoc: string ) {
            this.usernameLoc = usernameLoc;
            this.passwordLoc = passwordLoc;
            this.rememberMeLoc = rememberMeLoc;
            this.btnLoginLoc = btnLoginLoc;
    }

    fillUserName (username: string): void {
        console.log(`Filling username`,username);
    }

    fillPassword (password: string): void {
        console.log(`Filling password`,password);
    }

    clickRememberMe (): void {
        console.log(`Clicking remember me`);
    }

    clickLoginButton (): void {
        console.log(`Login successful`);
    }
}