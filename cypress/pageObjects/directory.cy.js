class DirectoryPage {
  visit() {
    cy.visit('/web/index.php/admin/viewSystemUsers');
  }

  verifyDirectory() {
    cy.url().should('include', '/admin/viewSystemUsers');
  }
}

module.exports = DirectoryPage;