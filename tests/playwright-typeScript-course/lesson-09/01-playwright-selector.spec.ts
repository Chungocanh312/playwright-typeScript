import {test} from "@playwright/test"

test('Demo playwright seletor', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    const title1 = await page.getByRole("heading",{name: "User Registration"}).textContent();
    const title2 = await page.locator(`//h1[@id='self']`).textContent();
    console.log(title1);
    console.log(title2);
})

test('Demo playwright seletor 2', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/04-xpath-personal-notes.html`);
    const title1 = await page.getByRole("heading",{name: "Personal Notes", level: 1}).textContent();
    console.log(title1);
})

