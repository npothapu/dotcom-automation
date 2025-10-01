import { rmiMainFormData } from "../../../index";
import { Page, expect } from "@playwright/test";

export async function doFillAndSubmitForm(page: Page, data: rmiMainFormData) {
  await page
    .getByRole("textbox", { name: "First Name, required" })
    .fill(data.firstName);
  await page
    .getByRole("textbox", { name: "Last Name, required" })
    .fill(data.lastName);
  await page.getByRole("textbox", { name: "Email, required" }).fill(data.email);
  await page
    .getByRole("textbox", { name: "Zip Code, required" })
    .fill(data.userEnteredZip);
  await page.getByRole("textbox", { name: "Phone, required" }).fill(data.phone);
  await page.getByLabel("Birth Month, required").selectOption(data.birthMonth);
  await page.getByLabel("Birth Year, required").selectOption(data.birthYear);
  await page
    .getByLabel("Education Level")
    .selectOption(data.educationLevel as string);
  const educationLevel = parseInt(data.educationLevel as string);
  if (educationLevel === 18) {
    await page
      .getByRole("textbox", {
        name: "School City, required",
      })
      .fill(data.schoolCity!);
    await page
      .getByLabel("School State, required")
      .selectOption(data.schoolState!);
    const schoolSelect = page.getByLabel("School Name", {
      exact: true,
    });
    await expect(
      schoolSelect.locator(`optgroup > option[value="${data.schoolValue!}"]`)
    ).toBeAttached();
    await schoolSelect.click();
    await schoolSelect.selectOption(data.schoolValue!);
  } else if (![19, 20, 29].includes(educationLevel)) {
    await page
      .getByRole("textbox", { name: "School Name, required" })
      .fill(data.schoolName);
  }
  if (data.priorServiceRank) {
    await page
      .getByRole("checkbox", { name: "I am a Prior Service Marine" })
      .check();
    const rankSelect = page.getByLabel("Rank, required");
    await expect(rankSelect).toBeVisible();
    await rankSelect.click();
    await rankSelect.selectOption(data.priorServiceRank);
    await page
      .getByRole("textbox", { name: "Your MOS during active duty?*" })
      .fill(data.mos!);
    await page
      .locator("#rmi_psr_profile_end_of_contract_month")
      .selectOption("05");
    await page
      .locator("#rmi_psr_profile_end_of_contract_day")
      .selectOption("15");
    await page
      .locator("#rmi_psr_profile_end_of_contract_year")
      .selectOption("2024");
  }
  await page
    .getByRole("checkbox", { name: "By providing the information" })
    .check();
  const submitBtn = page.getByRole("button", { name: "Submit" });
  await expect(submitBtn).toBeEnabled();
  await submitBtn.click();
}
