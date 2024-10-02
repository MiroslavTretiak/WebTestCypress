it('should register a new user and delete successfully', () => {
  
  cy.fixture('userData').then((userData) => {

    userData.email = `Testuser${Date.now()}@example.com`; // Generate a dynamic email

    cy.visit('');
    cy.get('body').should('contain', 'Home'); // Check home page visibility

    cy.registerUser(userData);

    cy.contains('Delete Account').click(); // Initiate account deletion
    cy.contains('Account Deleted!').should('be.visible'); // Verify deletion message
    cy.get('[data-qa="continue-button"]').click();
  });
});
