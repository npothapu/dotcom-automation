import { test, expect } from "@playwright/test";
import { acceptCookies, allSocialLinks } from "../../../../utils/index";

for (const link of allSocialLinks) {
  test(
    `${link.ariaLabel} footer link navigates to correct URL`,
    {
      tag: [
        "@user-flows",
        "@footer",
        "@footer-links",
        "@footer-social-link-navigation",
        "@redesign",
      ],
    },
    async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await acceptCookies(page);
      const initialUrl = page.url();
      await page.getByRole("link", { name: link.ariaLabel }).click();
      await expect(page).not.toHaveURL(initialUrl);
      expect(page.url()).toMatch(link.urlPattern!);
    }
  );
}
