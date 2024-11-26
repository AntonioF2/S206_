describe('Testes Prova Pratica, Cadastro e login', () => {
  it('Acesso ao site e Cadastro', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type("123")
    cy.get('#sign-password').click()
    cy.get('#sign-password').type("123")
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  })

  it('Login para conferir cadastro', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("123")
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("123")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

it('Caso de falha para fazer login', () => {
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#login2').click()
  cy.get('#loginusername').click()
  cy.get('#loginusername').type('aaaa')
  cy.get('#loginpassword').click()
  cy.get('#loginpassword').type('aaaaa')
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})


it('Adicionar Prrodutos ao carrinho', () => {
  cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("123")
    cy.wait(2000)
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("123")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.wait(2000)
  cy.get('.col-sm-12 > .btn').click()
  cy.wait(2000)
  cy.get('.col-sm-12 > .btn').click()
  cy.wait(2000)
  cy.get('.active > .nav-link').click()
  cy.wait(2000)
  cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click()
  cy.wait(2000)
  cy.get('.col-sm-12 > .btn').click()
  cy.get('#cartur').click()

})


it('Conferir carrinho', () => {
  cy.visit('https://www.demoblaze.com/index.html')
  
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("123")
    cy.wait(1000)
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("123")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
  cy.get(':nth-child(4) > .nav-link').click()
  cy.wait(2000)
  cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').click()
})


it('Fazer Pedido', () => {
  cy.visit('https://www.demoblaze.com/index.html') 
  cy.get('#login2').click()
  cy.get('#loginusername').click()
  cy.get('#loginusername').type("123")
  cy.wait(1000)
  cy.get('#loginpassword').click()
  cy.get('#loginpassword').type("123")
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('#cartur').click()
  cy.get('.col-lg-1 > .btn').click()
  cy.get('#name').type('Joao')
  cy.get('#country').type('Brazil')
  cy.get('#city').type('Santa Rita')
  cy.get('#card').type('1231231231')
  cy.get('#month').type('03')
  cy.get('#year').type('2006')
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})


it('Deletar produto do carrinho', () => {
  cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("123")
    cy.wait(1000)
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("123")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()
})





function criarUsuario() {
  
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'user'
  let senha =  horas + minutos + segundos + 'senha'
  let userInfo = [user, senha]
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#sign-username').type(user)
  cy.get('#sign-password').type(senha)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

  cy.get('#signin2').click()
    cy.get('#sign-username').type(user)
    cy.get('#sign-password').click()
    cy.get('#sign-password').type(senha)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    return userInfo
}





})
