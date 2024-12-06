import { test } from '@playwright/test';

test.describe('hola ', () => {
  test('hola', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Calcular' }).click();
  })
});