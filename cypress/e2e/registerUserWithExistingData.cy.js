it('should unsuccessfully register a user with existing email', () => {
  
  // Load user registration data from the fixture file 'logData1'
  cy.fixture('logData1').then((logData1) => {
      
      // Visit the homepage of the Automation Exercise website
      cy.visit('');

      // Verify that the home page is visible by checking for the presence of 'Home'
      cy.get('body').should('contain', 'Home');

      // Click on the 'Signup / Login' button to navigate to the registration page
      cy.contains('Signup / Login').click();

      // Verify that the 'New User Signup!' section is visible, indicating we are on the correct page
      cy.contains('New User Signup!').should('be.visible');

      // Enter the user's name into the signup form
      cy.get('[data-qa="signup-name"]').type(logData1.name);
      
      // Enter the user's email into the signup form
      cy.get('[data-qa="signup-email"]').type(logData1.email);
      
      // Click on the 'Signup' button to attempt to register the user
      cy.get('[data-qa="signup-button"]').click();

      // Verify that an error message is displayed indicating that the email address already exists
      cy.contains('Email Address already exist!').should('be.visible');
  });
});
