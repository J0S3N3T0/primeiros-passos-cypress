import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import PerformancePage from "../pages/performancePage"
import userData from "../fixtures/userData.json"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const performancePage = new PerformancePage()

const Chance = require('chance');
const chance = new Chance()

describe('Search in Perfomance', () => {

    it('Type in Performance', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        dashboardPage.checkDashboardPage()
        menuPage.performanceButton()

        performancePage.checkPerformancePage()
        performancePage.fillEmployeeReviews(chance.first(), "2024-11-12", "2025-02-01")

    })
  })