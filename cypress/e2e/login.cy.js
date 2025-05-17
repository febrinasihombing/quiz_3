describe('Login Page Test', () => {
  it('Login should succeed if form loads', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.wait(3000); // tambah waktu untuk jaga-jaga

    cy.get('input[name="username"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .type('Admin');

    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123');

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    cy.url().should('include', '/dashboard');
  });
});
