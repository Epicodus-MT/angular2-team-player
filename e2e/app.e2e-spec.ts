import { TeamPlayersPage } from './app.po';

describe('team-players App', () => {
  let page: TeamPlayersPage;

  beforeEach(() => {
    page = new TeamPlayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
