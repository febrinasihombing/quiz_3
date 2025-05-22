const LoginPage = require('../pageObjects/login.cy.js');
const ForgotPasswordPage = require('../pageObjects/forgotpassword.cy.js');
const DirectoryPage = require('../pageObjects/directory.cy.js');

describe('Pengujian Proyek Akhir - OrangeHRM', () => {
  const loginPage = new LoginPage();
  const forgotPasswordPage = new ForgotPasswordPage();
  const directoryPage = new DirectoryPage();

  beforeEach(() => {
    cy.intercept('POST', '**/api/v2/auth/login').as('loginRequest');
    cy.intercept('POST', '**/api/v2/auth/requestPasswordResetCode').as('resetPasswordRequest');
  });

  it('harus berhasil login dan navigasi ke Directory', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLogin();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/dashboard');
    cy.get('a[href="/web/index.php/admin/viewSystemUsers"]').click(); // Navigasi ke Directory
    directoryPage.verifyDirectory();
  });

  it('harus bisa request reset password', () => {
    forgotPasswordPage.visit();
    forgotPasswordPage.fillUsername('Admin');
    forgotPasswordPage.clickReset();
    cy.wait('@resetPasswordRequest').its('response.statusCode').should('eq', 200);
    cy.get('p').should('contain', 'Reset Password link sent successfully');
  });
});