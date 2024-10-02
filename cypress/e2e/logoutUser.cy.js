it('should login user with correct email and password successfully', () => {

    cy.fixture('logData1').then((logData1) => {
        cy.visit(''); 
        cy.get('body').should('contain', 'Home'); // Check home page visibility
        
        cy.login(logData1.email, logData1.password); // Login with fixture data
        cy.contains(`Logged in as ${logData1.name}`).should('be.visible'); // Verify login

        cy.contains(' Logout').click(); // Log out user
        cy.contains('Login to your account').should('be.visible'); // Check for login page
    });
});
