export default class base {
    
    clica(seletor){

    }
    escrever(seletor, texto){
        cy.get(seletor).type(texto)
    }
    
}