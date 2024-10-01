// Qwerty@dsd.com Qwerty123
describe('Login User with correct email and password', () => {
    it('should login user with correct email and password successfully', () =>{
        cy.visit('http://automationexercise.com');
        const userData = {
            email: 'Qwerty@dsd.com',
            password: 'Qwerty123',
            name: 'Qwerty'
        }   
  
        cy.get('body').should('contain', 'Home');
        
        cy.login(userData.email, userData.password);

        cy.contains(`Logged in as ${userData.name}`).should('be.visible');

        cy.contains(' Logout').click();

        cy.contains('Login to your account').should('be.visible');
      });
    });