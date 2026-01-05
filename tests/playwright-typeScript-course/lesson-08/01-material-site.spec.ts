import { test } from "@playwright/test";

test.describe("Material site", async () => {
  test.beforeAll(async ({ page }) => {
    await page.goto("http://playwrightvn.com");
  });

  test.afterAll(async ({ page }) => {
    await page.goto("http://playwrightvn.com");
  });

  test.beforeEach(async ({ page }) => {
    await test.step("Access Material page", async () => {
      await page.goto("https://material.playwrightvn.com/");
    });
  });

  test.afterEach(async ({ page }) => {
    await test.step("close browser", async () => {
      await page.close();
    });
  });

  test("User registration page", async ({ page }) => {
    await test.step("Click to User registration page link", async () => {
      await page
        .locator(`//a[contains(@href,'01-xpath-register-page')]`)
        .click();
    });
  });

  test("Product page", async ({ page }) => {
    await test.step("Click to product page link", async () => {
      await page
        .locator(`//a[contains(@href,'02-xpath-product-page')]`)
        .click();
    });
  });
});
