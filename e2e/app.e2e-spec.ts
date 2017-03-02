import { DropPage } from './app.po';

describe('drop App', function() {
  let page: DropPage;

  beforeEach(() => {
    page = new DropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
