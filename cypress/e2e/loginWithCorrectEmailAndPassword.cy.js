it('should login user with correct email and password successfully', () => {
  
  cy.fixture('userData1').then((userData) => {
    
    cy.visit(''); // Visit the homepage
    cy.get('body').should('contain', 'Home'); // Verify home page visibility

    cy.registerUser(userData); // Register a new user
    cy.contains('Logout').click(); // Log out

    cy.login(userData.email, userData.password); // Log in with fixture data
    cy.contains(`Logged in as ${userData.name}`).should('be.visible'); // Check login success

    cy.deleteAccount(); // Clean up by deleting the account
  });
});
