import { test, expect } from '@playwright/test';

test('Search on W3Schools', async ({ page }) => {
  // 1. Truy cập website
  await page.goto('https://www.w3schools.com/');

  // 2. Nhập giá trị vào ô search
  await page.fill('#tnb-google-search-input', 'HTML');

  // 3. Nhấn Enter để search
  await page.press('#tnb-google-search-input', 'Enter');

  // 4. Verify (kiểm tra có kết quả)
  await expect(page).toHaveURL(/html/);
});