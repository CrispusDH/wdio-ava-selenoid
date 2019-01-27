import { Options } from 'webdriver';
import { WebDriverLogTypes } from 'webdriver';

const direct: Options = {
  logLevel: 'error',
  path: '/',
  capabilities: {
    browserName: 'chrome'
  }
};

export const selenoid: Options = {
  protocol: 'http',
  port: 4444,
  hostname: 'localhost',
  path: '/wd/hub',
  logLevel: 'error' as WebDriverLogTypes,
  capabilities: {
    browserName: 'chrome'
  }
};

export const options: Options = process.env.runningType === 'selenoid' ? selenoid : direct;
