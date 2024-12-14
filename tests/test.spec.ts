import { test } from '@playwright/test';

test.describe('Caso de prueba #1', () => {
  test('Visitando front local', async ({ page }) => {
    //await page.goto('http://172.16.10.69:5173/');
    await page.goto('http:/172.16.10.69:5173/');
    await page.getByRole('button', { name: 'Calcular' }).click();
  })
});