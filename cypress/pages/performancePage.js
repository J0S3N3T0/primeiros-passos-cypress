class PerformancePage{
    selectorsList(){
        const selectors = {
            performanceTitle: ".oxd-topbar-header-breadcrumb-module",
            employeeName: ".oxd-autocomplete-text-input--active",
            jobTitle: ".oxd-select-text--after",
            genericWrapper: ".oxd-select-text-input", 
            genericDate: ".oxd-input",
            buttonSearch: "[type='submit']"

        }
        return selectors
    }

    checkPerformancePage(){
        cy.location('pathname').should('equal', '/web/index.php/performance/searchEvaluatePerformanceReview')
        cy.get(this.selectorsList().performanceTitle).should('be.visible')
        cy.get(this.selectorsList().performanceTitle).should('contain.text', 'Performance');
    }

    fillEmployeeReviews(name, dateFrom, toDate){
        cy.get(this.selectorsList().employeeName).type(name)
        cy.get(this.selectorsList().genericWrapper).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorsList().genericWrapper).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(6)').click({force: true})
        cy.get(this.selectorsList().genericWrapper).eq(2).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click({force: true})
        cy.get(this.selectorsList().genericWrapper).eq(3).click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click({force: true})
        cy.get(this.selectorsList().genericDate).eq(1).clear().type(dateFrom)
        cy.get('.--close').click()
        cy.get(this.selectorsList().genericDate).eq(2).clear().type(toDate)
        cy.get('.--close').click()
        cy.get(this.selectorsList().buttonSearch).click()
    }

}
export default PerformancePage