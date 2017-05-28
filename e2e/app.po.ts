import { browser, by, element } from 'protractor';

export class FoodTimePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('f-root h1')).getText();
  }
}
