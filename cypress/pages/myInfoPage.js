class MyInfoPage {

    selectorsList() {
        const selectors = {
            employeeContent: ".orangehrm-edit-employee",
            firstNameInput:"[name='firstName']",
            middleNameInput: "[name='middleName']",
            lastNameInput: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericWrapper: ".oxd-select-wrapper",
            genericRadioWrappper: ".oxd-radio-wrapper"
        }
        return selectors
    }   

    checkPersonalDetailsPage(){
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
        cy.get(this.selectorsList().employeeContent).should('be.visible')
    }

    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameInput).clear().type(firstName)
        cy.get(this.selectorsList().middleNameInput).clear().type(middleName)
        cy.get(this.selectorsList().lastNameInput).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, licenseExpiryDate, date){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(date)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericWrapper).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()
        cy.get(this.selectorsList().genericWrapper).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorsList().genericRadioWrappper).eq(1).click()
        
    }

    firstSave(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    customField(number){
        cy.get(this.selectorsList().genericWrapper).eq(2).click()
        cy.get('.oxd-select-dropdown > :nth-child(9)').click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(number)
    }
    
    secondSave(){
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}
export default MyInfoPage