import { FoodTimePage } from './app.po';

describe('food-time App', () => {
  let page: FoodTimePage;

  beforeEach(() => {
    page = new FoodTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('f works!');
  });
});
