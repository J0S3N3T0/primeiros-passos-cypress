import userData from '../fixtures/userData.json'
import personalDetailsData from '../fixtures/personalDetailsData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()
const chance = new Chance()

describe('User update with Orange HRM Tests', () => {

  it('User Update - Sucess', () => {

    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.myinfoButton()

    myInfoPage.checkPersonalDetailsPage()

    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())

    // myInfoPage.fillPersonalDetails(personalDetailsData.fullName.firstName, personalDetailsData.fullName.middleName, personalDetailsData.fullName.lastName)

    myInfoPage.fillEmployeeDetails(chance.natural({min: 1000000000, max: 9999999999}), chance.natural({min: 10000, max: 99999}), chance.natural({min: 10000, max: 99999}), personalDetailsData.licenseExpiryDate.licenseExpiryDate, personalDetailsData.birthday.date)

    // myInfoPage.fillEmployeeDetails(personalDetailsData.employeeId.employeeId, personalDetailsData.otherId.otherId, personalDetailsData.driverLicenseNumber.driverLicenseNumber, personalDetailsData.licenseExpiryDate.licenseExpiryDate, personalDetailsData.birthday.date)

    myInfoPage.firstSave()

    myInfoPage.customField(chance.natural({min: 0, max: 999}))

    //myInfoPage.customField(personalDetailsData.testField.number)

    myInfoPage.secondSave()

  })
})