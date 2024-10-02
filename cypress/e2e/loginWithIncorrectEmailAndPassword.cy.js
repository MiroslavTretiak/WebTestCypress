it('should login user with incorrect email and password unsuccessfully', () => {

  // Load login data from the fixture file
  cy.fixture('logData').then((logData) => {

    // Visit the homepage of the Automation Exercise website
    cy.visit('');

    // Click on the 'Signup / Login' button to navigate to the login page
    cy.contains('Signup / Login').click();

    // Verify that the 'Login to your account' message is visible
    cy.contains('Login to your account').should('be.visible');

    // Type the email from the fixture into the login email input field
    cy.get('[data-qa="login-email"]').type(logData.email);

    // Type the password from the fixture into the login password input field
    cy.get('[data-qa="login-password"]').type(logData.password);

    // Click the login button to attempt to log in
    cy.get('[data-qa="login-button"]').click();

    // Verify that the error message for incorrect email or password is displayed
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
