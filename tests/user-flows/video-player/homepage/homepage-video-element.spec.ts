import {test, expect} from "@playwright/test";

test("Should display video element on homepage and assert video is playing",
  {
    tag:["@user-flows", "@video-player", "@homepage-video-element"]
  },
    async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    if (isMobile) {
      await page.getByRole('button', { name: 'Close' }).click();  
    }
    await page.getByRole('button', { name: 'Paused' }).click();
    const homepageVideoContainer = page.getByRole('region', { name: 'Video Player' });
    const homepageVideo = page.locator('video[data-video-id="6365489511112"]');
    await expect(homepageVideoContainer).toContainClass('vjs-playing');
    await expect(homepageVideo).toBeVisible();
});