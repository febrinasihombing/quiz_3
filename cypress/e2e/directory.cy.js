import DashboardPage from '../support/pages/DashboardPage';

describe('Dashboard Directory Test', () => {
  it('should access directory after login', () => {
    cy.login(); // menggunakan custom command
    DashboardPage.goToDirectory();
    DashboardPage.verifyDirectoryVisible();
  });
});
