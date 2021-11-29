describe('Component Login', () => {
  it("Should Have Login's Component", () => {
    cy.visit('/');
    cy.get('[data-testid=container-login]').should('be.visible');
  });

  it('Should adjust the page for mobile', () => {
    cy.viewport('iphone-6+');
    cy.visit('/');
    cy.get('[data-testid=input-user]').type('davi@furg.com');

    cy.get('[data-testid=input-password]').type('!Davi123');
  });

  it('Should add user and show error "senha inválida"', () => {
    cy.visit('/');

    cy.get('[data-testid=input-user]').type('davi@furg.com');
    cy.get('[data-testid=input-password]').type('!Davi12');

    cy.contains('Ops, senha inválida.');
  });

  it('Should Login User and go to Screen Home', () => {
    cy.visit('/');

    cy.get('[data-testid=input-user]').type('davi@furg.com');
    cy.get('[data-testid=input-password]').type('!Davi123');

    cy.get('[data-testid=button-login]').click();
  });

  it ('Should add user and show error "email inválido"', () => {
    cy.visit('/');

    cy.get('[data-testid=input-user]').type('davifurg.com');
    cy.get('[data-testid=input-password]').type('!Davi123');

    cy.contains('Ops, usuário inválido.');
  });

  it ('Should add user and show error "usuário e senha inválidos"', () => {
    cy.visit('/');

    cy.get('[data-testid=input-user]').type('davifurg.com');
    cy.get('[data-testid=input-password]').type('!Davi13');

    cy.contains('Ops, usuário e senha invalidos.');
  });

  it ('Should have Saudacao "Olá,"', () => {
    cy.visit('/');

    cy.contains('Olá,');
  });

  it ('Should have Saudacao "Para continuar navegando de forma segura, efetue o login na rede."', () => {
    cy.visit('/');

    cy.contains('Para continuar navegando de forma segura, efetue o login na rede.');
  });

  it ('Should have Login User and passaword filled in', () => {
    cy.visit('/');

    cy.get('[data-testid=button-login]').click();
  });

  /*it ('Should have logo', () => {
    cy.visit('/');

    /instalei uma biblioteca addMatchImageSnapchat 
    (senao me engano) porem nao consegui utilizar.
  });*/
});
