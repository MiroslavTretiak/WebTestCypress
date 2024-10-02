

  it('should show "All Products" and product detail page', () =>{

    cy.visit('http://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.contains('All Products').should('be.visible');
    cy.get('.features_items').should('be.visible');

    cy.contains('View Product').click();

    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');

    cy.contains('Blue Top').should('be.visible');
    cy.contains('Category: Women > Tops').should('be.visible');
    cy.contains('Rs. 500').should('be.visible');
    cy.contains('Availability:').should('be.visible');
    cy.contains('Condition:').should('be.visible');
    cy.contains('Brand:').should('be.visible');
  });
