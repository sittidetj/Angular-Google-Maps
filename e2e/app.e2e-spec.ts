import { AGMPage } from './app.po';

describe('agm App', () => {
  let page: AGMPage;

  beforeEach(() => {
    page = new AGMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
