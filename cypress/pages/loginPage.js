class LoginPage{

    selectorsList() {
        const selectors = {
            usernameFiel: "[name='username']",
            passwordFiel: "[name='password']",
            loginButton: ".oxd-button",
            alertErrorLogin: ".oxd-alert",
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameFiel).type(username)
        cy.get(this.selectorsList().passwordFiel).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    alertError(){
        cy.get(this.selectorsList().alertErrorLogin)
    }
}
export default LoginPage