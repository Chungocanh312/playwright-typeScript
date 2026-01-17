import {Page} from '@playwright/test'

export class MaterialPage {
    page: Page;
    baseURL: string;

    constructor(page: Page) {
        this.page = page;
        this.baseURL = `await page.goto('https://material.playwrightvn.com/');`;
    }

    async goToUrl () {
        await this.page.goto(this.baseURL);
    }
}