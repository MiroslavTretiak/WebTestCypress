it('should login user with incorrect email and password unsuccessfully', () => {

  cy.fixture('logData').then((logData) => {
    cy.visit(''); 
    cy.contains('Signup / Login').click(); // Navigate to the login page

    cy.contains('Login to your account').should('be.visible'); // Verify login message

    cy.get('[data-qa="login-email"]').type(logData.email); // Type email data
    cy.get('[data-qa="login-password"]').type(logData.password); 
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
