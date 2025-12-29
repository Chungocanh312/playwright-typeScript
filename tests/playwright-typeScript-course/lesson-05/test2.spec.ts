import {test,expect, Locator} from "@playwright/test"

test('', async ({page}) => {
    const playwrightPageUrl = `https://material.playwrightvn.com/`;
    
    const productPageLink = page.locator("//a[contains(@href,'02-xpath-product-page')]");
    const product1 = page.locator(`//div[contains(text(),'Product 1')]//following-sibling::button[@class='add-to-cart']`);
    const product2 = page.locator(`//div[contains(text(),'Product 2')]//following-sibling::button[@class='add-to-cart']`);
    const product3 = page.locator(`//div[contains(text(),'Product 3')]//following-sibling::button[@class='add-to-cart']`);
    const removeItem = page.locator(`//tbody[@id='cart-items']//button[text()='Remove']`);
    const addedItemNumber = page.locator(`//tbody[@id='cart-items']//td[3]`);
    const addedProductName = page.locator(`//tbody[@id='cart-items']//td[1]`);

    await test.step('Access playwrightvn page', async ()=> {
        await page.goto(playwrightPageUrl);
    })

    await test.step('Click on Product page', async ()=> {
        await productPageLink.click();
    })

    await test.step('Add 2 items for product 1', async ()=> {
        await clickNtime(2,product1);
    })

    await test.step('Verify cart', async ()=> {
        await expect(addedProductName).toHaveText(`Product 1`)
        await expect(addedItemNumber).toHaveText(`2`);
    })

    await test.step('Remove added items', async ()=> {
        await removeItem.click();
    })

    await test.step('Add 3 items for product 2', async ()=> {
        await clickNtime(3,product2);
    })

    await test.step('Verify cart', async ()=> {
        await expect(addedProductName).toHaveText(`Product 2`)
        await expect(addedItemNumber).toHaveText(`3`);
    })

    await test.step('Remove added items', async ()=> {
        await removeItem.click();
    })

    await test.step('Add 1 items for product 3', async ()=> {
        await clickNtime(1,product3);
    })

    await test.step('Verify cart', async ()=> {
        await expect(addedProductName).toHaveText(`Product 3`)
        await expect(addedItemNumber).toHaveText(`1`);
    })

    await test.step('Remove added items', async ()=> {
        await removeItem.click();
    })

    
});

async function clickNtime (times : number, locator : Locator) {
    for (let i = 1; i <= times; i++) {
        await locator.click();
    }

}