import { remote } from 'webdriverio';
import anyTest, { TestInterface } from 'ava';
import { options } from '../src/utils/options';
import { Landing } from '../src/page/landing';
import { NavigationOptions } from '../src/module/header';

const test = anyTest as TestInterface<{browser: BrowserObject}>;

test.beforeEach('Setup browser', async (t) => {
  t.context.browser = await remote(options);
});

test.afterEach('Tear down', async (t) => {
  await t.context.browser.deleteSession();
});

test('Check Guide reference', async (t) => {
  const browser = t.context.browser;
  await t.context.browser.url('https://webdriver.io/');
  const page = new Landing(browser);
  await page.header.navigate(NavigationOptions.Guide);
  const title = await browser.getUrl();
  t.is(title, 'https://webdriver.io/docs/gettingstarted.html');
});

test('Check API reference', async (t) => {
  const browser = t.context.browser;
  await t.context.browser.url('https://webdriver.io/');
  const page = new Landing(browser);
  await page.header.navigate(NavigationOptions.API);
  const title = await browser.getUrl();
  t.is(title, 'https://webdriver.io/docs/api.html');
});

test('Check Blog reference', async (t) => {
  const browser = t.context.browser;
  await t.context.browser.url('https://webdriver.io/');
  const page = new Landing(browser);
  await page.header.navigate(NavigationOptions.Blog);
  const title = await browser.getUrl();
  t.is(title, 'https://webdriver.io/blog/');
});
