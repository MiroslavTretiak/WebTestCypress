
// Command for registration of new user
Cypress.Commands.add('registerUser', (userData) => {
  
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
  
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
  
    cy.contains('Enter Account Information').should('be.visible');
  
    cy.get('#id_gender1').check(); // Check for 'Mr.'
    cy.get('#password').type(userData.password);
    cy.get('#days').select(userData.birthDay);
    cy.get('#months').select(userData.birthMonth);
    cy.get('#years').select(userData.birthYear);
  
    cy.get('#newsletter').check();
    cy.get('#optin').check();
  
    cy.get('#first_name').type(userData.firstName);
    cy.get('#last_name').type(userData.lastName);
    cy.get('#company').type(userData.company);
    cy.get('#address1').type(userData.address1);
    cy.get('#address2').type(userData.address2);
    cy.get('#country').select(userData.country);
    cy.get('#state').type(userData.state);
    cy.get('#city').type(userData.city);
    cy.get('#zipcode').type(userData.zipcode);
    cy.get('#mobile_number').type(userData.mobileNumber);
  
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${userData.name}`).should('be.visible');
  });


// Command for user login
Cypress.Commands.add('login', (email, password) => {


  cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');

    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  });

// Command for deleting account

Cypress.Commands.add('deleteAccount', () => {
  cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
