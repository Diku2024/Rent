import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://www.redfin.com/');
  const title = await page.title();

  console.log(`page title: ${title}`);

  // Assert the title
  expect(title).toBe('Rent. Find your next place | Apartments and Houses for Rent.');
 
});
 
test('Click on Log In button', async ({ page }) => {
    await page.goto('https://rent.com');

    // Click the button with text "Log in"
    //created account with Diku, Peppa, dikupeppa@gmail.com and pw Chet@1234
    await page.click('[data-tid="nav-bar-log-in"]');
    await page.fill('[data-tid="log-in-email-input"]', 'Dikupeppa@gmail.com');
    await page.fill('[data-tid="log-in-password-input"]', 'Chet@1234');
    await page.click('[data-tid="log-in-submit"]');
   
  });

  test('Login to Redfin', async ({ page }) => {
    await page.goto('https://redfin.com');

    // Click the button with text "Log in"
    //created account with Diku, Peppa, dikupeppa@gmail.com and pw Chet@1234
    await page.click('text=Join / Sign in');
    await page.fill('[name="emailInput"]', 'dikupeppa@gmail.com');
    await page.click('button:has-text("Continue with email")');
    await page.click('button:has-text("Sign in with email instead")');
    await page.fill('#passwordInput', 'DikuPeppa@11');
  });
   