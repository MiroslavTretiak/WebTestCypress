it('should login user with correct email and password successfully', () => {

    // Load user login data from the fixture file 'logData1'
    cy.fixture('logData1').then((logData1) => {
        
        // Visit the homepage of the Automation Exercise website
        cy.visit('');
  
        // Verify that the home page is visible by checking for the presence of 'Home'
        cy.get('body').should('contain', 'Home');
        
        // Attempt to login using the email and password from the loaded fixture
        cy.login(logData1.email, logData1.password);

        // Verify that the user is logged in by checking for the visibility of the welcome message with the user's name
        cy.contains(`Logged in as ${logData1.name}`).should('be.visible');

        // Click on the 'Logout' button to log out the user
        cy.contains(' Logout').click();

        // Verify that the user is taken back to the login page after logging out
        cy.contains('Login to your account').should('be.visible');
    });
});
