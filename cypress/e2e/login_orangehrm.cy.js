
describe('Login OrangeHRM', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.url().then((url) => {
      if (!url.includes('/auth/login')) {
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();
        cy.url().should('include', '/auth/login');
      }
    });
  });

  it('TC-001: Login berhasil dengan username dan password benar', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-title').should('contain.text', 'Dashboard');
  });

  it('TC-002: Login gagal dengan password salah', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').type('salah123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials');
  });
});
