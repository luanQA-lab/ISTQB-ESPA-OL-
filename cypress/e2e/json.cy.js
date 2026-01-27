import jsonpom from "../pages/jsonpom";

const json = [
    "fundamentos",
    "sdlc",
    "tecnicas",
    "estatico",
    "gestion",
    "herramientas"
];

describe('ISTQB App - JSON Data Validation', () => {

it('Los archivos existem y no están vacíos', () => {

    json.forEach((name) => {
      jsonpom.getQuestions(name).then(data => {
        expect(data).to.exist
      })
    })
  })



it ('los archivos contienen los campos requeridos', () => {
    json.forEach((name) => {
      jsonpom.getQuestions(name).then(data => {
        data.forEach((question) => {
          expect(question).to.have.all.keys('question', 'options', 'correct', 'image')
        })

      })
    })
  })

});
