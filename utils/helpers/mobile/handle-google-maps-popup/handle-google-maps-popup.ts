import { Page } from "@playwright/test";

export const handleGoogleMapsPopup = async (nextPage: Page) => {
  await nextPage.waitForTimeout(2000);
  const goBackButton = nextPage.getByRole("button", { name: "Go back to web" });
  const keepWebButton = nextPage.getByRole("button", {
    name: "Keep using web",
  });
  if (await goBackButton.isVisible()) {
    await goBackButton.click();
  } else if (await keepWebButton.isVisible()) {
    await keepWebButton.click();
  }
};
