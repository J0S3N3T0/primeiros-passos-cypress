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

    myInfoPage.fillPersonalDetails(personalDetailsData.fullName.firstName, personalDetailsData.fullName.middleName, personalDetailsData.fullName.lastName)

    myInfoPage.fillEmployeeDetails(personalDetailsData.employeeId.employeeId, personalDetailsData.otherId.otherId, personalDetailsData.driverLicenseNumber.driverLicenseNumber, personalDetailsData.licenseExpiryDate.licenseExpiryDate, personalDetailsData.birthday.date)

    myInfoPage.firstSave()

    myInfoPage.customField(personalDetailsData.testField.number)

    myInfoPage.secondSave()

  })
})