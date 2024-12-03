describe('Orange HRM Tests', () => {

  const selectorsList ={
    link: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    usernameFiel: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordFiel: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginButton: ".oxd-button",
    selectionTitlleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    alertErrorLogin: ".oxd-alert"
  }

  it('Login - Sucess', () => {
    cy.visit(selectorsList.link)
    cy.get(selectorsList.usernameFiel).type('Admin')
    cy.get(selectorsList.passwordFiel).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectionTitlleTopBar).contains('Dashboard')
  })
  it('Login - Fail - 1', () => {
    cy.visit(selectorsList.link)
    cy.get(selectorsList.usernameFiel).type('Admin1')
    cy.get(selectorsList.passwordFiel).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertErrorLogin)
  })
  it('Login - Fail - 2', () => {
    cy.visit(selectorsList.link)
    cy.get(selectorsList.usernameFiel).type('admin')
    cy.get(selectorsList.passwordFiel).type('admin1234')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertErrorLogin)
  })
})