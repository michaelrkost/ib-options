import { browser, element, by } from 'protractor';

export class IbOptionsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ib-root h1')).getText();
  }
}
