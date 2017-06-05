import { SelectboxPage } from './app.po';

describe('selectbox App', () => {
  let page: SelectboxPage;

  beforeEach(() => {
    page = new SelectboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
