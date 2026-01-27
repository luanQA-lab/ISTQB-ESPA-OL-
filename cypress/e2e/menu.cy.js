import menupom from '../pages/menupom';

 const sections = [
    'fundamentos',
    'sdlc',
    'tecnicas',
    'estatico',
    'gestion',
    'herramientas'
  ]


describe('ISTQB App', () => {

  beforeEach(() => {
    cy.visit('/')
  })


  it('Carga la página principal', () => {
    
    cy.contains('PRACTICA ISTQB EN ESPAÑOL') 
  })

  it('Validar que los elementos del menú estén presentes', () => {
    menupom.Fundamentos().should('be.visible');
    menupom.SLDC().should('be.visible');
    menupom.Tecnicas().should('be.visible');
    menupom.Estatico().should('be.visible');
    menupom.Gestión().should('be.visible');
    menupom.Herramientas().should('be.visible');
  })

 
  it('Validar la navegacion de todos los elementos del menú ', () => {
   sections.forEach(section => {

      menupom.clickOption(section)

      menupom.amountSelector().should('be.visible')

      menupom.backToMenu()

  })


})

})
