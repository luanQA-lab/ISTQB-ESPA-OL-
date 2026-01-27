import QuestionPom from "../pages/questionpom";
import menupom from '../pages/menupom';


const amounts = [5, 10, 15, 20];
const amountsEdge = [5, 10];
describe('ISTQB App - Questions Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
        
    });

//Validar casos bordes, fundamentos y herramientas
it ('Validar la navegación de la selección de cantidad de preguntas', () => {

    ["fundamentos", "herramientas"].forEach(section => {
        menupom.clickOption(section)
        amounts.forEach((amount)=> {
            QuestionPom.amountselector(amount).should('be.visible')
         });
        menupom.backToMenu()
    })

    });

//Validar la cantidad de preguntas seleccionadas en cada sección
it ('Validar la cantidad de preguntas seleccionadas en cada sección', () => {
    ["fundamentos", "herramientas"].forEach(section => {
        menupom.clickOption(section)
        //mockeamos a 5 , porque no hay suficientes preguntas
       amountsEdge.forEach((amount)=> {
            QuestionPom.amountselector(amount).click()
            QuestionPom.counter().should('have.text', `Pregunta 1 / ${amount}`)    
            QuestionPom.amountbtn().click() 
         });
        menupom.backToMenu()
        });
    });

});


