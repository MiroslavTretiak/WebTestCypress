
it('should register a new user and delete successfully', () => {
  
  // Load user data from the fixture file
  cy.fixture('userData').then((userData) => {

    // Generate a dynamic email by appending the current timestamp
    userData.email = `Testuser${Date.now()}@example.com`;

    // Visit the homepage of the Automation Exercise website
    cy.visit('');

    // Verify that the home page is visible by checking for the presence of 'Home'
    cy.get('body').should('contain', 'Home');

    // Call the custom command to register the user with the loaded user data
    cy.registerUser(userData);

    // Click on the 'Delete Account' button to initiate account deletion
    cy.contains('Delete Account').click();

    // Verify that the account deletion confirmation message is visible
    cy.contains('Account Deleted!').should('be.visible');

    // Click the continue button to return to the homepage
    cy.get('[data-qa="continue-button"]').click();
  });
});





