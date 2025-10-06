import { test, expect } from "@playwright/test";
import { acceptCookies, allSocialLinks } from "../../../../utils/index";

for (const link of allSocialLinks) {
  test(
    `${link.ariaLabel} footer link has correct URL`,
    {
      tag: ["@content-validations", "@footer", "@footer-links", "@redesign"],
    },
    async ({ page }) => {
      await page.goto("/");
      await acceptCookies(page);
      const expectedHref = link.linkUrl;
      await expect(
        page.getByRole("link", { name: link.ariaLabel })
      ).toHaveAttribute("href", expectedHref);
    }
  );
}
