import userData from '../fixtures/userData.json'
import personalDetailsData from '../fixtures/personalDetailsData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  it('User Update - Sucess', () => {

    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.myinfoButton()

    myInfoPage.checkPersonalDetailsPage()

    myInfoPage.firstNameInput(personalDetailsData.fullName.firstName)

    myInfoPage.middleNameInput(personalDetailsData.fullName.middleName)

    myInfoPage.lastNameInput(personalDetailsData.fullName.lastName)

    myInfoPage.employeeId(personalDetailsData.employeeId.employeeId)

    myInfoPage.otherId(personalDetailsData.otherId.otherId)

    myInfoPage.driverLicenseNumber(personalDetailsData.driverLicenseNumber.driverLicenseNumber)

    myInfoPage.licenseExpiryDate(personalDetailsData.licenseExpiryDate.licenseExpiryDate)

    myInfoPage.bithday(personalDetailsData.birthday.date)

    //myInfoPage.nationality()

    myInfoPage.status()

    myInfoPage.gender()

    myInfoPage.firstSave()

    myInfoPage.blood()

    myInfoPage.testField(personalDetailsData.testField.number)

    myInfoPage.secondSave()

  })
})