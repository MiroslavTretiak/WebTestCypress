const logData = {
    email: 'Qwerty@dsd.com',
    password: 'Qwerty123',
    name: 'Qwerty'
}  


  it('should unsuccessfully register a user with existing email', () =>{

    cy.visit('http://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
  
    cy.get('[data-qa="signup-name"]').type(logData.name);
    cy.get('[data-qa="signup-email"]').type(logData.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Email Address already exist!').should('be.visible');



  });
