import base from "./basePage"

export default class formularioPage extends base {

    constructor() {
        super();
        this.campoSenha = 'input[name="form_senha"]'
        this.campoUsuario = 'input[name="form_usuario"]'
        this.coluna = 'td:nth-child(5)'
    }

    elements = {
        campoUsuario: () => cy.get(this.campoUsuario),
        usuarioCriado: () => cy.get('body > section > section.wrapper > div > table > tbody > tr:nth-child(2)'),
        usuario: (posicao) => cy.get(`body > section > section.wrapper > div > table > tbody > tr:nth-child(${posicao}) > ${this.coluna} > a`),
        tabela: () => cy.get('body > section > section.wrapper > div > table > tbody'),
        a: () => cy.get('tr[td="n2"]')
    }

    preencherUsuario() {
        this.elements.campoUsuario().type('Ana')
    }

    preencherSenha() {
        cy.get(this.campoSenha).type('123')
    }

    excluirUsuario(posicao) {
        const index = posicao + 1;
        this.elements.usuario(index).scrollIntoView().click();
    }
}
