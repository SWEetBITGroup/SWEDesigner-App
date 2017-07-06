import { ProvajointPage } from './app.po';

describe('provajoint App', () => {
  let page: ProvajointPage;

  beforeEach(() => {
    page = new ProvajointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
