import { APIRequestContext, expect } from "@playwright/test";


export class ProductCatalogApiPage {
    request: APIRequestContext
    baseUrl: string

    constructor (request: APIRequestContext) {
        this.request = request;
        this.baseUrl = `https://material.playwrightvn.com/api/product-catalog/v1`;
    }

    async getAllProduct () {
       const response = await this.request.get(`${this.baseUrl}/products.php`, {
            // params : {
            //     limit : 100,
            //     sort_order : 'DESC'
            // }    
        });
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        return responseJson;
    }
}