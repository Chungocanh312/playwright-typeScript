import {Page} from '@playwright/test'

export class ProductPage {
    page: Page

    constructor (page: Page) {
        this.page = page;
    }

    async addProductToCart () {
        await this.page.locator(``).click;
    }
}