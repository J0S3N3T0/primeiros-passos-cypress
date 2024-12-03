import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const link ={
    link: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  }
  
  const selectorsList ={
    usernameFiel: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordFiel: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginButton: ".oxd-button",
    selectionTitlleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    alertErrorLogin: ".oxd-alert",
    dashboardGrid: ".orangehrm-dashboard-grid > :nth-child(1)"
  }
  
  it('Login - Sucess', () => {
    cy.visit(link.link)
    cy.get(selectorsList.usernameFiel).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.selectionTitlleTopBar).contains('Dashboard')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail - Wrong Username', () => {
    cy.visit(link.link)
    cy.get(selectorsList.usernameFiel).type(userData.userWrongName.username)
    cy.get(selectorsList.passwordFiel).type(userData.userWrongName.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertErrorLogin)
  })
  it('Login - Fail - Wrong Password', () => {
    cy.visit(link.link)
    cy.get(selectorsList.usernameFiel).type(userData.userWrongPassword.username)
    cy.get(selectorsList.passwordFiel).type(userData.userWrongPassword.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertErrorLogin)
  })
})