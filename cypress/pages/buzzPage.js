class BuzzPage {
    selectorsList() {
        const selectors = {
            gridCreatePost: ".orangehrm-buzz-create-post",
            typeNewPost: ".oxd-buzz-post-input",
            buttonPost: "[type='submit']",
            genericButton: "[type='button']",
            fieldInputCommentVideo: ".orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input",
            fieldInputVideo: ".oxd-textarea--resize-vertical",
            cardTittle: ".oxd-text--p",
            commentaryInput: ".oxd-input",
            buttonConfirmationDelete: ".oxd-button--label-danger"
        }
        return selectors
    }
    checkBuzzPage(){
        cy.location('pathname').should('equal', '/web/index.php/buzz/viewBuzz')
        cy.get(this.selectorsList().gridCreatePost).should('be.visible')
    }

    createNewPostType(text){
        cy.get(this.selectorsList().typeNewPost).click().type(text)
        cy.get(this.selectorsList().buttonPost).click()
    }

    buttonMostRecentPosts(){
        cy.get(this.selectorsList().genericButton).eq(5).click()
    }

    buttonMostLikedPosts(){
        cy.get(this.selectorsList().genericButton).eq(6).click()
    }

    buttonCommentedLikedPosts(){
        cy.get(this.selectorsList().genericButton).eq(7).click()
    }

    buttonShareVideo(){
        cy.get(this.selectorsList().genericButton).eq(4).click()
        cy.get(this.selectorsList().cardTittle).should('contain', 'Share Video')
    }

    buttonOptionEdit(text){
        cy.get(this.selectorsList().genericButton).eq(8).click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        cy.get('textarea').eq(1).click({force: true}).clear().type(text)
        cy.get(this.selectorsList().buttonPost).eq(1).click()
    }

    buttonOptionDelete(){
        cy.get(this.selectorsList().genericButton).eq(8).click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        cy.get(this.selectorsList().buttonConfirmationDelete).click()
    }

    buttonHeart(){
        cy.get('.orangehrm-heart-icon-path').eq(0).click()
    }

    buttonComentary(){
        cy.get(this.selectorsList().genericButton).eq(9).click()
        cy.get(this.selectorsList().commentaryInput).eq(1).click().type("Hi {enter}")
    }

    buttonLikeComentary(){
        cy.get('.orangehrm-post-comment-action-area > :nth-child(1)').click()
    }

    buttonEditComentary(text){
        cy.get('.orangehrm-post-comment-action-area > :nth-child(2)').click()
        cy.get(this.selectorsList().commentaryInput).eq(2).click().type('{selectall}{backspace}'+text+'{enter}')
        cy.reload()
       
    }

    buttonDeleteComentary(){
        cy.get(this.selectorsList().genericButton).eq(9).click()
        cy.get('.orangehrm-post-comment-action-area > :nth-child(3)').click()
        cy.get(this.selectorsList().buttonConfirmationDelete).click()
    }

    buttonSharePost(text){
        cy.get(this.selectorsList().genericButton).eq(10).click()
        cy.get('textarea').eq(1).click({force: true}).type(text)
        cy.get(this.selectorsList().buttonPost).eq(1).click()
    }

    menssageSucess(){
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close').click({force: true})
        cy.reload();
    }

    menssageDeleted(){
        cy.get('body').should('contain', 'Successfully Deleted')
        cy.get('.oxd-toast-close').click({force: true})
        cy.reload();
    }

    createNewPostVideo(text, urlVideo){

        cy.get(this.selectorsList().genericButton).eq(4).click()

        cy.get('.oxd-dialog-container-default--inner').should('be.visible')
        
        cy.get('textarea').eq(1).type(text)
        
        cy.get('textarea').eq(2).type(urlVideo)

    }

}
export default BuzzPage
