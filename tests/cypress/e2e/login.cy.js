import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {

  it('deve logar com sucesso', () => {

    const user = {
      name: 'Ana',
      instagram: 'gdragoa',
      password: '210598',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('não deve logar com senha incorreta', () => {

    const user = {
      instagram: 'gdragoaa',
      password: '210598',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('não deve logar com instagram inexistente', () => {

    const user = {
      instagram: 'gdrago',
      password: '210598',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: '210598',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')  
  })

  it('password deve ser obrigatório', () => {
    const user = {
      instagram: 'gdragoa',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')  
  })

  it('todos os campos devem ser obrigatórios', () => {
    const user = {
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')  
  })
})



