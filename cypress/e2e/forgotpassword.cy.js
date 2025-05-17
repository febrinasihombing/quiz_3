import ForgotPasswordPage from '../support/pages/ForgotPasswordPage';

describe('Forgot Password Test', () => {
  it('should show success message when valid username is entered', () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.enterUsername('Admin');
    ForgotPasswordPage.clickReset();

    cy.contains('Reset Password link sent successfully').should('be.visible');
  });
});
