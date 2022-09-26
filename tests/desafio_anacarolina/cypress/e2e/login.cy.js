const { cypressBrowserPermissionsPlugin } = require("cypress-browser-permissions")

describe('Login', () => {
  it('deve logar com sucesso', () => {

    const user = {
      name: 'ana',
      instagram: 'gdragoa',
      password: '210598',
    }

    cy.login(user)
    cy.loggedUser(user.name)
  })

  it('não deve logar com senha incorreta', () => {

    const user = {
      instagram: 'gdragoaa',
      password: '210598',
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('não deve logar com instagram inexistente', () => {

    const user = {
      instagram: 'gdrago',
      password: '210598',
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      name: 'ana',
      instagram: 'gdragoa',
      password: '210598',
    }

    cy.loginWithoutInstagram(user)
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')  
  })

  it('password deve ser obrigatório', () => {
    const user = {
      name: 'ana',
      instagram: 'gdragoa',
      password: '210598',
    }

    cy.loginWithoutPassword(user)
    cy.modalHaveText('Por favor, informe a sua senha secreta!')  
  })

  it('todos os campos devem ser obrigatórios', () => {
    const user = {
      name: 'ana',
      instagram: 'gdragoa',
      password: '210598',
    }

    cy.blankLogin(user)
    cy.modalHaveText('Por favor, informe suas credenciais!')  
  })
})



