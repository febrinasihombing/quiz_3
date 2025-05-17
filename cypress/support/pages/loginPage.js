class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Ganti dengan URL login kamu
  }

  fillUsername(username) {
cy.get('[name="username"]').type(username)

  }

  fillPassword(password) {
    cy.get('[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  assertLoginSuccess() {
    cy.url().should('include', '/dashboard') // Ganti sesuai halaman setelah login
  }
}

export default LoginPage
