// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://tesonet.com/');
});


test.describe('Test Suite', () => {
  test('Navigating to career page', async ({ page }) => {

    const locator = page.locator('#menu-item-19 >> text=Career');

    await locator.click();

    //counting the career categories

    await page.waitForSelector(".career-lever-v3__job-category-content");
    const categories = await page.$$(".career-lever-v3__job-category-content")
    

    // const counts = await page.locator("career-lever-v3__job-category-content")   //class="career-lever-v3__job-category-content"
    console.log(categories.length);

    });

  
});


