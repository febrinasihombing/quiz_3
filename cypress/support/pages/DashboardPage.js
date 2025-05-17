class DashboardPage {
  goToDirectory() {
    cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
  }

  verifyDirectoryVisible() {
    cy.contains('Directory').should('be.visible');
  }
}
export default new DashboardPage();
