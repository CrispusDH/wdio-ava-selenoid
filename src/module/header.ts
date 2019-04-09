import { Element } from 'webdriverio';
import pFilter from 'p-filter';

export class Header {
  private readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  async navigate(to: NavigationOptions): Promise<void> {
    const items = await this.navigation;
    if (!items) {
      throw new Error('I do not see Navigation items in the header');
    }
    const filtered = await pFilter(
      items,
      async (item) => {
        const text = await item.getText();
        return text === to;
      });
    await filtered[0].click();
  }

  private get navigation(): Promise<Array<Element>> {
    return $$(`${this.selector} .nav-site-internal li`);
  }
}

export const enum NavigationOptions {
  Guide = 'Guide',
  API = 'API',
  Help = 'Help',
  Blog = 'Blog'
}
