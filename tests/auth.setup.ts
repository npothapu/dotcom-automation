import { test as setup } from "@playwright/test";
import { expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page, baseURL }) => {
  if (!baseURL) throw new Error("No baseURL defined");
  setup.skip(process.env.ENV === "PROD" || process.env.ENV === "PRODRMI");
  await page.goto(baseURL, { waitUntil: "domcontentloaded" });
  if (process.env.ENV === "STGRMI") {
    await expect(
      page.getByRole("heading", { name: "Request Information" })
    ).toBeVisible();
  } else {
    await expect(page.getByText("WE WERE MADE FOR THIS")).toBeVisible();
  }
  await page.context().storageState({ path: authFile });
});
