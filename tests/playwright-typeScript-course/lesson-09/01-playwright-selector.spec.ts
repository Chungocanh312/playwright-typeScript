import {test, expect} from "@playwright/test"

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

test('Demo playwright seletor 3', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    await page.getByRole("checkbox",{name: "Traveling"}).check();
    await page.getByRole("radio",{name: "Female"}).check();
    await expect(page.getByRole("checkbox",{name: "Traveling"})).toBeChecked();
    await expect(page.getByRole("radio",{name: "Female"})).toBeChecked();
})

test('Demo playwright seletor 4', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    await page.getByRole("radio",{name: "Male", exact : true}).check(); 
    // dùng exact để chỉ tìm đúng tên = Male, nếu không nó sẽ lấy cả Female trên UI
    await expect(page.getByRole("radio",{name: "Female"})).toBeChecked();
})

test('Demo playwright seletor 5', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/12-dom-nested.html`);
    const phoitemText = await page.getByRole("listitem").filter({hasText: "Ph"}).textContent();
    // Với role = listitem không bắt buộc phải dùng với filter
    // Tuy nhiên với trường hợp role listitem trả ra toàn bộ các item có trên page thì phải dùng cùng với filter để trách các strict mode
    console.log(phoitemText)
})

test('Demo playwright seletor 6', async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    await page.getByLabel("Username:").fill("Chu Ngoc Anh");
})

