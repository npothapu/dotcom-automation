import { rmiMainFormData } from "../../../index";
import { Page, expect } from "@playwright/test";

export async function doFillAndSubmitInfluencerForm(
  page: Page,
  data: rmiMainFormData
) {
  await page
    .getByRole("textbox", { name: "First Name, required" })
    .fill(data.firstName);
  await page
    .getByRole("textbox", { name: "Last Name, required" })
    .fill(data.lastName);
  await page.getByRole("textbox", { name: "Email" }).fill(data.email);
  await page
    .getByRole("textbox", { name: "Zip Code, required" })
    .fill(data.userEnteredZip);
  await page.getByRole("textbox", { name: "Phone, required" }).fill(data.phone);
  const relationshipSelect = page.getByLabel("Relationship, required");
  await expect(relationshipSelect).toBeVisible();
  await relationshipSelect.click();
  await relationshipSelect.selectOption(data.relationship!);
  await page
    .getByRole("checkbox", { name: "By providing the information" })
    .check();
  await page.getByRole("button", { name: "Submit" }).click();
}
