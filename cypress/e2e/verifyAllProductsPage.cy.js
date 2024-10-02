it('should show "All Products" and product detail page', () => {
  
  // Visit the homepage of the Automation Exercise website
  cy.visit('');

  // Verify that the home page is visible by checking for the presence of 'Home'
  cy.get('body').should('contain', 'Home');

  // Click on the 'Products' button to navigate to the Products page
  cy.contains('Products').click();

  // Verify that the 'All Products' section is visible, indicating successful navigation
  cy.contains('All Products').should('be.visible');

  // Ensure that the product items section is also visible on the All Products page
  cy.get('.features_items').should('be.visible');

  // Click on the 'View Product' button to view the details of the first product
  cy.contains('View Product').click();

  // Verify that the URL includes '/product_details', confirming navigation to the product detail page
  cy.url().should('include', '/product_details');

  // Check that the product information section is visible on the product detail page
  cy.get('.product-information').should('be.visible');

  // Verify that the product name 'Blue Top' is visible on the product detail page
  cy.contains('Blue Top').should('be.visible');

  // Verify that the product category is correctly displayed
  cy.contains('Category: Women > Tops').should('be.visible');

  // Verify that the product price 'Rs. 500' is visible on the product detail page
  cy.contains('Rs. 500').should('be.visible');

  // Check for the presence of the availability information
  cy.contains('Availability:').should('be.visible');

  // Check for the presence of the condition information
  cy.contains('Condition:').should('be.visible');

  // Check for the presence of the brand information
  cy.contains('Brand:').should('be.visible');
});
