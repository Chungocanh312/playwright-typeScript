import { test } from "@playwright/test";
import { MyLoginPage } from "./03-pom";

test.describe("Login feature", async () => {
  test("Login successful", async ({ page }) => {
    const myLoginPage = new MyLoginPage(page);

    await test.step("Access login page", async () => {
      await myLoginPage.goToUrl(
        `https://pw-practice-dev.playwrightvn.com/wp-login.php?`
      );
    });

    await test.step("fill userName", async () => {
      await myLoginPage.fillUserName("betterbytes.academy.admin");
    });

    await test.step("fill password", async () => {
      await myLoginPage.fillPassword("StrongPass@BetterBytesAcademy");
    });

    await test.step("click on Login button", async () => {
      await myLoginPage.clickLogin();
    });
  });

  test("Login failure", async ({ page }) => {
    const myLoginPage = new MyLoginPage(page);

    await test.step("Access login page", async () => {
      await myLoginPage.goToUrl(
        `https://pw-practice-dev.playwrightvn.com/wp-login.php?`
      );
    });

    await test.step("fill userName", async () => {
      await myLoginPage.fillUserName("betterbytes.academy.admin");
    });

    await test.step("fill password", async () => {
      await myLoginPage.fillPassword("StrongPass@BetterBytesAcademy123");
    });

    await test.step("click on Login button", async () => {
      await myLoginPage.clickLogin();
    });
  });
});
