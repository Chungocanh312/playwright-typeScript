import { expect, test } from "@playwright/test";
import { MaterialPage } from "./00-pom";

// Dùng beforeEach để tối ưu:
test.describe("Material page - use beforeEach", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com`);
  });

  test("Test 1: registration page", async ({ page }) => {
    await page
      .getByText(`Bài học 1: Register Page (có đủ các element)`)
      .click();

    await expect(page.getByText("User Registration")).toBeVisible();
  });

  test("Test 2: Product page", async ({ page }) => {
    await page.getByText(`Bài học 2: Product page`).click();

    await expect(page.getByText("Simple E-commerce")).toBeVisible();
  });
});

// Dùng POM để tối ưu : refer to file 00-pom.ts
test.describe("Material page - use POM", async () => {
  let materialPage : MaterialPage;

  test.beforeEach(async ({ page }) => {
    materialPage = new MaterialPage(page);
    await materialPage.goToUrl();
  });

  test("Test 1: registration page", async () => {
    await materialPage.page
      .getByText(`Bài học 1: Register Page (có đủ các element)`)
      .click();

    await expect(materialPage.page.getByText("User Registration")).toBeVisible();
  });

  test("Test 2: Product page", async () => {
    await materialPage.page.getByText(`Bài học 2: Product page`).click();

    await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
  });
});