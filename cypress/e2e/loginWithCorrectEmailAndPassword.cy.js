
describe('Login User with correct email and password', () => {
  it('should login user with correct email and password successfully', () =>{
      cy.visit('http://automationexercise.com');
      const userData1 = {
        name: 'Testuser',
        email: `Test999@example.com`,
        password: 'Qwerty123',
        firstName: 'Test',
        lastName: 'User',
        company: 'TestCompany',
        address1: 'TestStreet',
        address2: 'Bird 56',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobileNumber: '1234567890',
        birthDay: '10',
        birthMonth: 'May',
        birthYear: '1990',    
      };      

      cy.get('body').should('contain', 'Home');
      cy.registerUser(userData1);
      cy.contains(' Logout').should('be.visible');
      cy.contains(' Logout').click();
  
      
      cy.login(userData1.email, userData1.password);
  
      cy.deleteAccount();
    });
  });