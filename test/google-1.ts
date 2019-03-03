import { remote } from 'webdriverio';
import anyTest, { TestInterface } from 'ava';
import { options } from '../src/utils/options';

const test = anyTest as TestInterface<{browser: BrowserObject}>;

test.beforeEach('Setup browser', async (t) => {
  t.context.browser = await remote(options);
});

test.afterEach('Tear down', async (t) => {
  await t.context.browser.deleteSession();
});

test('Check title #1', async (t) => {
  await t.context.browser.url('https://webdriver.io');
  const title = await t.context.browser.getTitle();
  t.is(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});

test('Check title #2', async (t) => {
  await t.context.browser.url('https://webdriver.io');
  const title = await t.context.browser.getTitle();
  t.is(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});

test('Check title #3', async (t) => {
  await t.context.browser.url('https://webdriver.io');
  const title = await t.context.browser.getTitle();
  t.is(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});
