import {test, expect, request} from '@playwright/test';
import { ProductCatalogApiPage } from './03-product-catalog.api.page';


test('Get all product', async ({request}) => {
    const productCatalogApiPage = new ProductCatalogApiPage(request);
    const allProduct = await productCatalogApiPage.getAllProduct();

    expect(allProduct.data.products.length).toBeGreaterThan(1);
})
