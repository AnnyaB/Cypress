import formularioPage from "../pageObject/formularioPage"

const form = new formularioPage

describe('Formulário de Usuário', () => {

  it('Deve criar um usuário', () => {
    cy.acessarForm()
    form.preencherUsuario()
    form.preencherSenha()
    cy.get('input[name="form_nome"]').type('teste')
    cy.get('input[type="submit"]').click()

    cy.get('input[name="form_nome"]').should('be.visible')

    form.elements.usuarioCriado().should('be.visible')
    cy.contains('Ana').should('be.visible')
    cy.screenshot()
  })

  describe('excluir usuario', () => {
    it('passes', () => {
      cy.acessarForm()
      form.excluirUsuario(1) 
      form.elements.usuarioCriado().should('not.exist')
      cy.contains('Ana').should('not.exist')
      cy.screenshot()
    })
  })
})
