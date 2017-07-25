import { AglAppPage } from './app.po';

describe('agl-app App', () => {
  let page: AglAppPage;

  beforeEach(() => {
    page = new AglAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
