import { test, expect } from '@playwright/test';

test('test by code gen', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await expect(page.getByRole('heading', { name: 'Tài liệu học automation test' })).toBeVisible();
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});