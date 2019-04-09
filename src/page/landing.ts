import { Browser } from 'webdriverio';
import { Header } from '../module/header';

export class Landing {
  private readonly browser: Browser;

  constructor(browser) {
    this.browser = browser;
  }

  get header(): Header {
    return new Header('.fixedHeaderContainer', this.browser);
  }
}
