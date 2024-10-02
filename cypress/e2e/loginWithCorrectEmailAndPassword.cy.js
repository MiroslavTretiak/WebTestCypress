it('should login user with correct email and password successfully', () => {

  // Load user data from the fixture file
  cy.fixture('userData1').then((userData) => {

    // Visit the homepage of the Automation Exercise website
    cy.visit('');

    // Verify that the home page is visible by checking for the presence of 'Home'
    cy.get('body').should('contain', 'Home');

    // Register a new user using the data from the fixture
    cy.registerUser(userData);

    // Click on the 'Logout' button to ensure the user is logged out before attempting to log in again
    cy.contains('Logout').click();

    // Log in using the email and password from the user data loaded from the fixture
    cy.login(userData.email, userData.password);

    // Verify that the user is logged in by checking for the visibility of the welcome message with the user's name
    cy.contains(`Logged in as ${userData.name}`).should('be.visible');

    // Delete the account after successful login to clean up
    cy.deleteAccount();
  });
});
