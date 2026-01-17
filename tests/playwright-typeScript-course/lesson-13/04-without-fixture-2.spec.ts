import { expect, test } from "@playwright/test";
import { MaterialPage } from "./00-pom";

test.describe("Material page - use POM", async () => {
  let materialPage : MaterialPage;

  test.beforeEach(async ({ page }) => {
    materialPage = new MaterialPage(page);
    await materialPage.goToUrl();
  });

  test("Test 3: To do page", async () => {
    await materialPage.page
      .getByText(`Bài học 3: Todo page`)
      .click();

    await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
  });

  test("Test 4: Personal notes page", async () => {
    await materialPage.page.getByText(`Bài học 4: Personal notes`).click();

    await expect(materialPage.page.getByText("Personal Notes")).toBeVisible();
  });
});