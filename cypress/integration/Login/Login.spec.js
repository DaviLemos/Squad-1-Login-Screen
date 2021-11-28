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
  });

  it('Should Login User and go to Screen Home', () => {
    cy.visit('/');

    cy.get('[data-testid=input-user]').type('davi@furg.com');
    cy.get('[data-testid=input-password]').type('!Davi123');

    cy.get('[data-testid=button-login]').click();
  });
});
