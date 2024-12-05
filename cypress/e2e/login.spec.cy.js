import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()

describe('Orange HRM Tests', () => {


  it('Login - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    cy.location('pathname').should('equal', dashboard.accessDashboardPage())
    dashboard.gridDashboard

  })
  it('Login - Fail - Wrong Username', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userWrongName.username, userData.userWrongName.password)
    loginPage.alertError()

  })
  it('Login - Fail - Wrong Password', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userWrongPassword.username, userData.userWrongPassword.password)
    loginPage.alertError()
  })
})