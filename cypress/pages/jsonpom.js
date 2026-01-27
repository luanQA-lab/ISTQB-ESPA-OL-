class jsonpom{

    //selectors

    getQuestions(name){
        return cy.readFile(`data/${name}.json`)
    }

}

export default new jsonpom();