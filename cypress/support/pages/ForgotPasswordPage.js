class ForgotPasswordPage {
  visit() {
    cy.visit('/web/index.php/auth/requestPasswordResetCode');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  clickReset() {
    cy.get('button[type="submit"]').click();
  }
}
export default new ForgotPasswordPage();
