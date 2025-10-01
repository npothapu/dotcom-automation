import { test as base, Browser, chromium } from '@playwright/test';
import getPort from 'get-port';
export const lighthouseTest = base.extend<
  {},
  { port: number; browser: Browser }
>({
  port: [
    async ({}, use) => {
      const port = await getPort();
      await use(port);
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [
          `--remote-debugging-port=${port}`,
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--headless=new'
        ],
        headless: true, 
      });
      await use(browser);
      await browser.close();
    },
    { scope: 'worker' },
  ],
});