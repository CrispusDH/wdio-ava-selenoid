import { Header } from '../module/header';

export class Landing {
  get header(): Header {
    return new Header('.fixedHeaderContainer');
  }
}
