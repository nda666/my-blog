import { test, expect } from "@playwright/test";

test("If login failed should show error message", async ({ page }) => {
  await page.goto("/login");
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("admin@wrong.com");
  await page.locator("label").filter({ hasText: "Password" }).click();
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("12345678");
  await page.getByRole("button", { name: "Login" }).click();
  const loginMessage = await page.waitForSelector("text=Incorrect login", {
    timeout: 10000,
  });
  await expect(loginMessage).toBeTruthy();
});
