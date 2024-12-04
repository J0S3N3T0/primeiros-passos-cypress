import userData from '../fixtures/userData.json'
import personalDetails from '../fixtures/personalDetails.json'

describe('Orange HRM Tests', () => {

  const selectorsList ={
    usernameFiel: "[name='username']",
    passwordFiel: "[name='password']",
    loginButton: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    employeeContent: ".orangehrm-edit-employee",
    firstNameInput:"[name='firstName']",
    middleNameInput: "[name='middleName']",
    lastNameInput: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it('User Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFiel).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myinfoButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorsList.employeeContent)
    cy.get(selectorsList.firstNameInput).clear().type(personalDetails.fullName.firstName)
    cy.get(selectorsList.middleNameInput).clear().type(personalDetails.fullName.middleName)
    cy.get(selectorsList.lastNameInput).clear().type(personalDetails.fullName.lastName)
    cy.get(selectorsList.genericField).eq(3).clear().type(personalDetails.employeeId.employeeId)
    cy.get(selectorsList.genericField).eq(4).clear().type(personalDetails.otherId.otherId)
    cy.get(selectorsList.genericField).eq(5).clear().type(personalDetails.driverLicenseNumber.driverLicenseNumber)
    cy.get(selectorsList.genericField).eq(6).clear().type(personalDetails.licenseExpiryDate.licenseExpiryDate)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type(personalDetails.birthday.date)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
})