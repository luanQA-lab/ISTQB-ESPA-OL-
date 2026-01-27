class QuestionPom {


//selectores 

backToMenu() {
   cy.get('#backBtn').click()
  }

amountmenu() {
    return cy.get('#amountSelector')
  }

amountselector(number) {
    return cy.get(`[data-amount="${number}"]`)
  }

counter() {
    return cy.get('#counter')
}

menubtn() {
    return cy.get('#menuBtn')
  }
  
amountbtn() {
    return cy.get('#amountbtn')
  }
}
export default new QuestionPom();