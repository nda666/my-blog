import { test, expect } from "@playwright/test";

test("homepage has title and links to intro page", async ({ page }) => {
  const response = await page.goto("/");
  await expect(response?.ok()).toBeTruthy();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(process.env.APP_NAME);
  await page.getByRole("link", { name: "Repository" }).first().click();
  await expect(page).toHaveURL("/repository");
});
