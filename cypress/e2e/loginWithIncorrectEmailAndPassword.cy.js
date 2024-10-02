
  it('should login user with incorrect email and password unsuccessfully', () =>{
      cy.visit('http://automationexercise.com');

      const logData = {
        email: 'Test999@example.com',
        password: 'Qwerty1234',
      }
 
      cy.contains('Signup / Login').click();
      cy.contains('Login to your account').should('be.visible');
  
      cy.get('[data-qa="login-email"]').type(logData.email);
      cy.get('[data-qa="login-password"]').type(logData.password);
      cy.get('[data-qa="login-button"]').click();
  
      cy.contains('Your email or password is incorrect!').should('be.visible');
      
    });