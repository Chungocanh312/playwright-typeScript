import { expect} from "@playwright/test";
import {test} from "./00-fixture";

test("Test 3: To do page", async ({materialPage}) => {
    await materialPage.page
      .getByText(`Bài học 3: Todo page`)
      .click();

    await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
  });

test("Test 4: Personal notes page", async ({materialPage}) => {
    await materialPage.page.getByText(`Bài học 4: Personal notes`).click();

    await expect(materialPage.page.getByText("Personal Notes")).toBeVisible();
  });