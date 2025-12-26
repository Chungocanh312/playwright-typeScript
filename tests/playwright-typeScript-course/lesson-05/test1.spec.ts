import { test, expect } from "@playwright/test";

test("Register page", async ({ page }) => {
  await test.step("Access page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Register page", async () => {
    await page.locator("//a[contains(@href,'01-xpath-register-page')]").click();
  });

  await test.step("Input data", async () => {
    await page.locator("//input[@id='username']").fill(`Chu Ngoc Anh`);
    await page.locator("//input[@id='email']").fill(`Chu Ngoc Anh`);
    const isGenderMaleChecked = await page.locator("//input[@id='male']").isChecked();
    if(isGenderMaleChecked === true) {
        await page.locator("//input[@id='male']").check();
    }
    await page.locator("//input[@id='reading']").check();
    await page.locator("//select[@id='interests']").selectOption(`Science`);
    await page.locator("//select[@id='country']").selectOption(`Australia`);
    await page.locator("//input[@id='dob']").fill(`1990-01-03`);
    await page.locator("//textarea[@id='bio']").fill(`Biography`);
    

   
  });

  await test.step("", async () => {

  });
});
