import { test, expect } from "@playwright/test";

test("Demo expect", async () => {
  expect(1 + 2).toEqual(3);
});

// expect array length:
const arr = [1, 2, 3];
expect(arr).toHaveLength(3);

// expect string contains:
const str = "Hello Vietnam";
expect(str).toContain("Vietnam");

test("Material page", async ({ page }) => {
  await page.goto(`https://material.playwrightvn.com/`);
  const title = await page.title();
  expect(title).toContain(`Playwright Việt Nam`);
});

test("Material page - non web-first assertion", async ({ page }) => {
  await page.goto(
    `https://material.playwrightvn.com/01-xpath-register-page.html`
  );
  const isRegisterButtonVisible = page
    .locator(`//button[@type='submit']`)
    .isVisible();
  expect(isRegisterButtonVisible).toEqual(true);

});

test("Material page - web-first Assertion", async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/019-enable-form.html`);
    const isSubmitButtonEnable = page.locator(`//button[@id='submitButton']`);
    await expect(isSubmitButtonEnable).toBeEnabled({timeout: 10_000}); 
    // với web-first Assertion thì sẽ phải có await
    // Ở trên set timeout để cho playwright hiểu là mình chỉ chờ tối đa 10s
  });

test("Material page - demo toHaveClass()", async ({page}) => {
    await page.goto(`https://material.playwrightvn.com/01-xpath-register-page.html`);
    const containerClassLocator = page.locator(`//div[@id='ancestor']`);
    await expect(containerClassLocator).toHaveClass('container');
  });  
