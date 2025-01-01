import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import userData from "../fixtures/userData.json"
import BuzzPage from "../pages/buzzPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const buzzPage = new BuzzPage()

describe('Post and Delete in Buzz', () => {

    it('TypePost -> LikePost -> EditPost -> DeletePost', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        
        dashboardPage.checkDashboardPage()
        
        menuPage.buzzButton()

        buzzPage.checkBuzzPage()

        buzzPage.createNewPostType("QA Test 1")

        buzzPage.menssageSucess()

        cy.reload();

        buzzPage.buttonHeart()

        buzzPage.buttonOptionEdit("QA Text 2")

        cy.reload();

        buzzPage.buttonOptionDelete()

    }),
    it('TypePost -> ComentInPost -> LikeComentary -> EditComentary -> DeleteComentary', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        
        dashboardPage.checkDashboardPage()
        
        menuPage.buzzButton()

        buzzPage.checkBuzzPage()

        buzzPage.createNewPostType("QA Test 1")

        buzzPage.menssageSucess()

        cy.reload();

        buzzPage.buttonComentary()

        buzzPage.menssageSucess()

        buzzPage.buttonLikeComentary()

        buzzPage.buttonEditComentary("Test")
        
        buzzPage.buttonDeleteComentary()

        buzzPage.menssageDeleted()

    }),
    it('TypePost -> SharePost -> DeleteSharePost -> DeletePost', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        
        dashboardPage.checkDashboardPage()
        
        menuPage.buzzButton()

        buzzPage.checkBuzzPage()

        buzzPage.createNewPostType("QA Test 1")

        buzzPage.menssageSucess()

        cy.reload();

        buzzPage.buttonSharePost("Good Post")

        buzzPage.menssageSucess()

        buzzPage.buttonOptionDelete()

        buzzPage.menssageDeleted()

        buzzPage.buttonOptionDelete()

        buzzPage.menssageDeleted()

    }),

    it('TypeVideoPost', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        
        dashboardPage.checkDashboardPage()
        
        menuPage.buzzButton()

        buzzPage.checkBuzzPage()

        buzzPage.createNewPostVideo("Best OLD MEME", 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')

    })
  })