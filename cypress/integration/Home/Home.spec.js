describe('Component Home', () => {
  it("Should Have Login's Component", () => {
    // Visita the login page
    cy.visit('/');
    // Procura o elemento container-login
    // Asserção: O elemento deve ser visível
    cy.get('[data-testid=container-login]').should('be.visible');
  });

  it('Try to go home if you are logged in ', () => {
    // Visita the login page
    cy.visit('/');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
  });

  it('Must log in as a user', () => {
    // Visita the login page
    cy.visit('/');
    // Procura o elemento input-user e digita o email
    cy.get('[data-testid=input-user]').type('rfrodrigues@inf.ufpel.edu.br');
    // Procura o elemento input-password e digita a senha
    cy.get('[data-testid=input-password]').type('19985looP@');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
    // Usuario loga na pagina e clica nos elementos com texto
    cy.contains('Our mission is').click();
    cy.contains('Nossa missão é').click();
    cy.contains('to transform the world').click();
    cy.contains('transformar o mundo').click();
    cy.contains('building digital experiences').click();
    cy.contains('construindo experiências digitais').click();
    cy.contains('that enable our client’s growth').click();
    cy.contains('que permitam o crescimento dos nossos clientes').click();
    cy.contains('Porto Alegre - RS').click();
  });

  it('Must log in as a user and perfome logout', () => {
    // Visita the login page
    cy.visit('/');
    // Procura o elemento input-user e digita o email
    cy.get('[data-testid=input-user]').type('rfrodrigues@inf.ufpel.edu.br');
    // Procura o elemento input-password e digita a senha
    cy.get('[data-testid=input-password]').type('19985looP@');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
    // Procura o elemento btnLogout e clica nele
    cy.get('[data-testid=btnLogout]').click();
  });

  it('Must log in as a user and perfome logout in mobile model', () => {
    // Modo mobile
    cy.viewport('iphone-6+');
    // Visita the login page
    cy.visit('/');
    // Procura o elemento input-user e digita o email
    cy.get('[data-testid=input-user]').type('rfrodrigues@inf.ufpel.edu.br');
    // Procura o elemento input-password e digita a senha
    cy.get('[data-testid=input-password]').type('19985looP@');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
    // Procura o elemento btnLogout e clica nele
    cy.get('[data-testid=btnLogout]').click();
  });

  it('Must log in as a user and wait the time logout', () => {
    // Visita the login page
    cy.visit('/');
    // Procura o elemento input-user e digita o email
    cy.get('[data-testid=input-user]').type('rfrodrigues@inf.ufpel.edu.br');
    // Procura o elemento input-password e digita a senha
    cy.get('[data-testid=input-password]').type('19985looP@');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
    // Usuario loga na pagina e espera o tempo de logout
    cy.wait(300000);
  });

  it('Must log in as a user and wait the time logout in mobile model', () => {
    // Modo mobile
    cy.viewport('iphone-6+');
    // Visita the login page
    cy.visit('/');
    // Procura o elemento input-user e digita o email
    cy.get('[data-testid=input-user]').type('rfrodrigues@inf.ufpel.edu.br');
    // Procura o elemento input-password e digita a senha
    cy.get('[data-testid=input-password]').type('19985looP@');
    // Procura o elemento button-login e clica nele
    cy.get('[data-testid=button-login]').click();
    // Usuario loga na pagina e espera o tempo de logout
    cy.wait(300000);
  });
});
