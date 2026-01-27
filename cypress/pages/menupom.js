class menupom {
  
//selectores de los elementos del menú

Fundamentos = () => cy.get('[data-category="fundamentos"]');
SLDC = () => cy.get('[data-category="sdlc"]');
Tecnicas = () => cy.get('[data-category="tecnicas"]')  
Estatico = () => cy.get('[data-category="estatico"]');
Gestión = () => cy.get('[data-category="gestion"]');
Herramientas = () => cy.get('[data-category="herramientas"]');


 amountSelector() {
    return cy.get('#amountSelector')
  }


  clickOption(name) {
    cy.get(`[data-category="${name}"]`).click()
  }

  backToMenu() {
   cy.get('#backBtn').click()
  }

}


export default new menupom();