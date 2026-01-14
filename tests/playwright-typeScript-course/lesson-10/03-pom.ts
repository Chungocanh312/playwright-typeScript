import {Page} from '@playwright/test'

export class MyLoginPage {
    page: Page;
    logoLocator: string = `//img[@class='logo']`;
    userNameLocator: string = `//input[@id='user_login']`;
    passwordLocator: string = `//input[@id='user_pass']`;
    rememberMeLocator: string = `//input[@id='rememberme']`;
    LoginButtonLocator: string = `//input[@id='wp-submit']`;

    constructor(page: Page){
        this.page = page;
    }
    
    async goToUrl(Url: string){
        await this.page.goto(Url);
    }

    async fillUserName(userName: string){
        await this.page.locator(this.userNameLocator).fill(userName);
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordLocator).fill(password);
    }

    async clickLogin(){
        await this.page.locator(this.LoginButtonLocator).click();
    }
}

