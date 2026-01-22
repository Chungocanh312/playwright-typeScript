import {Page} from '@playwright/test';
import { ProductPage } from './02-product.page';

export class HomePage {
    page: Page

    constructor (page: Page) {
        this.page = page;
    }

    async navigateToProductPage () {
        await this.page.locator(``).click();
        return new ProductPage(this.page)
    }
}