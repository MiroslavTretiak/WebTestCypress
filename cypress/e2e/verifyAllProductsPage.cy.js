it('should show "All Products" and product detail page', () => {
  cy.visit(''); 

  cy.get('body').should('contain', 'Home'); // Check home page visibility
  cy.contains('Products').click(); // Navigate to Products page
  cy.contains('All Products').should('be.visible'); // Verify All Products section
  cy.get('.features_items').should('be.visible'); // Ensure product items section is visible

  cy.contains('View Product').click(); // Click on the first product's view button
  cy.url().should('include', '/product_details'); // Confirm navigation to product detail page

  cy.get('.product-information').should('be.visible'); // Check product information section
  cy.contains('Blue Top').should('be.visible'); // Verify product data
  cy.contains('Category: Women > Tops').should('be.visible'); 
  cy.contains('Rs. 500').should('be.visible'); 
  cy.contains('Availability:').should('be.visible'); 
  cy.contains('Condition:').should('be.visible'); 
  cy.contains('Brand:').should('be.visible'); 
});
