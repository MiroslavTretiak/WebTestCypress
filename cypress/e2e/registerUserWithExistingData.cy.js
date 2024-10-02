it('should unsuccessfully register a user with existing email', () => {
  
  cy.fixture('logData1').then((logData1) => {
    cy.visit('');
    cy.get('body').should('contain', 'Home'); // Check home page visibility

    cy.contains('Signup / Login').click(); // Navigate to registration page
    cy.contains('New User Signup!').should('be.visible'); // Ensure on correct page

    cy.get('[data-qa="signup-name"]').type(logData1.name); // Enter data
    cy.get('[data-qa="signup-email"]').type(logData1.email);
    cy.get('[data-qa="signup-button"]').click(); 

    cy.contains('Email Address already exist!').should('be.visible'); // Verify error message
  });
});
