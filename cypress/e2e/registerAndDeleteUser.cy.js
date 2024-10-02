
const userData = {
  name: 'Testuser',
  email: `Testuse${Date.now()}@example.com`,
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

  it('should register a new user and deletin successfully', () =>{
    cy.visit('http://automationexercise.com');
    cy.get('body').should('contain', 'Home');

    cy.registerUser(userData);

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();



  });




