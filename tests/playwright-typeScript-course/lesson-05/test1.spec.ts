import { test, expect } from "@playwright/test";

test("Register page", async ({ page }) => {
  let userName = `Chu Ngoc Anh`;
  let email = `chugocanh@gmail.com`;
  let interest = `Science`;
  let country = `Australia`;
  let dayOfBirth = `1990-01-03`; 
  let biography = `biography`; 
  const playwrightPageUrl = `https://material.playwrightvn.com/`;

  const registerPagelink = page.locator(`//a[contains(@href,'01-xpath-register-page')]`)
  const userNameTextbox = page.locator(`//input[@id='username']`);
  const emailTextbox = page.locator(`//input[@id='email']`);
  const mailGenderCheckbox = page.locator("//input[@id='male']");
  const hobbiesReadingCheckbox = page.locator("//input[@id='reading']");
  const interestDropdown = page.locator("//select[@id='interests']");
  const countryDropdown = page.locator("//select[@id='country']");
  const dobCalendar = page.locator("//input[@id='dob']");
  const bioTextArea = page.locator("//textarea[@id='bio']");
  const submitButon = page.locator("//button[@type='submit']");

  const userNameData = page.locator("//tbody//descendant::td[2]");
  const emailData = page.locator("//tbody//descendant::td[3]");
  const informationUserData = page.locator(`//tbody//descendant::td[4]`);

  await test.step("Access playwrightvn page", async () => {
    await page.goto(playwrightPageUrl);
  });

  await test.step("Click on Register page", async () => {
    await registerPagelink.click();
  });

  await test.step("Input data", async () => {
    await userNameTextbox.fill(userName);
    await emailTextbox.fill(email);
    const isGenderMaleChecked = await mailGenderCheckbox.isChecked();
    if(!isGenderMaleChecked === true) {
        await mailGenderCheckbox.check();
    }
    await hobbiesReadingCheckbox.check();
    await interestDropdown.selectOption(interest);
    await countryDropdown.selectOption(country);
    await dobCalendar.fill(dayOfBirth);
    await bioTextArea.fill(biography);
    await submitButon.click();
  });

  await test.step("Verify data", async () => {
    await expect(userNameData).toHaveText(userName);
    await expect(emailData).toHaveText(email);
    await expect(informationUserData).toContainText(`australia`);
    await expect(informationUserData).toContainText(dayOfBirth);
    await expect(informationUserData).toContainText(biography);
  });
});
