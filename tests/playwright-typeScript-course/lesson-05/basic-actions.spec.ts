import { test } from '@playwright/test'

test('Basic action', async ({ page }) => {
  await test.step('Go to home page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  })

  await test.step('Click on Bài học 1', async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  })

  await test.step('Input', async () => {
    await page.locator("//input[@id='username']").fill(`ngoc anh`);
    await page
      .locator("//input[@id='email']")
      .pressSequentially('ngocanh@gmail.com', {
        delay: 10, // cứ 1s sẽ điền 1 chữ
      });
  })

  await test.step('check/ uncheck checkbox/radio button', async () => {
    const isMaleChecked = await page.locator("//input[@id='male']").isChecked();
    if (isMaleChecked === false) {
      await page.locator("//input[@id='male']").check();
    } else {
      await page.locator("//input[@id='female']").setChecked(true);
    }
  })

  await test.step('select Interest dropdown', async () => {
    await page.locator("//select[@id='interests']").selectOption('Art'); 
    await page.locator("//select[@id='interests']").selectOption({label: 'Technology'});
  })

  await test.step('select Country dropdown', async () => {
    await page.locator("//select[@id='country']").selectOption('United Kingdom');
  })

  await test.step('upload file', async () => {
    await page.locator("//input[@id='profile']").setInputFiles('tests/playwright-typeScript-course/lesson-05-data-test/data-test.txt')
  })

});
