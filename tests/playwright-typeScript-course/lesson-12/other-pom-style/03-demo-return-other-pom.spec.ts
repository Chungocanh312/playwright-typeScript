import {test,expect} from '@playwright/test';
import { HomePage } from './01-home.page';

test ('Demo return other POM styles', async ({page}) => {
    const homePage = new HomePage(page);
    const productPage = await homePage.navigateToProductPage()
    await productPage.addProductToCart();
});