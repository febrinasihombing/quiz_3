class ForgotPasswordPage {
  visit() {
    cy.visit('/web/index.php/auth/requestPasswordResetCode');
  }

  getUsernameInput() {
    return cy.get('input[name="username"]');
  }

  getResetButton() {
    return cy.get('button[type="submit"]');
  }

  fillUsername(username) {
    this.getUsernameInput().type(username);
  }

  clickReset() {
    this.getResetButton().click();
  }
}

module.exports = ForgotPasswordPage;