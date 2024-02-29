import { test, expect } from "@playwright/test";

const baseURl = "http://localhost:3000";

test.describe("testing header", () => {
  test("navigation", async ({ page }) => {
    await page.goto(baseURl);
    await page.getByRole("link", { name: "ABOUT" }).click();
    await expect(page).toHaveURL(`${baseURl}/about`);
  });

  test("navigation about page", async ({ page }) => {
    await page.goto(`${baseURl}/about`);
    await page.getByRole("link", { name: "HEADER" }).click();
    await expect(page).toHaveURL(baseURl);
  });
});
