// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=npx+playwright+test&oq=npx+playwright+test&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzcyNGowajKoAgCwAgA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('button', { name: 'Hylkää kaikki' }).click();
  await page.getByRole('link', { name: 'Running and debugging tests Playwright https://playwright.dev › docs › runni...' }).click();
  await page.getByLabel('Switch between dark and light mode (currently dark mode)').click();
  await page.getByRole('link', { name: 'How to debug tests' }).click();
  await page.locator('div:nth-child(40) > .codeBlockContent_biex > .buttonGroup__atx > .clean-btn').click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'playwright.config', exact: true }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'How to record a trace' }).click();
});