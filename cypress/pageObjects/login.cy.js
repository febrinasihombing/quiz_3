class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login');
  }

  getUsernameInput() {
    return cy.get('input[name="username"]');
  }

  getPasswordInput() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[type="submit"]');
  }

  fillUsername(username) {
    this.getUsernameInput().type(username);
  }

  fillPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }
}

module.exports = LoginPage;