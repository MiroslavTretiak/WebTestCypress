it('should allow add review on product', () => {
  
    // Visit the homepage of the Automation Exercise website
    cy.visit('');

    // Verify that the home page is visible by checking for the presence of 'Home'
    cy.get('body').should('contain', 'Home');

    // Click on the 'Products' button to navigate to the products page
    cy.contains('Products').click();

    // Verify that the 'All Products' page is visible
    cy.contains('All Products').should('be.visible');

    // Ensure that the products section is visible
    cy.get('.features_items').should('be.visible');

    // Click on the 'View Product' button for the first product
    cy.contains('View Product').click();

    // Verify that the 'Write Your Review' section is visible on the product detail page
    cy.contains('Write Your Review').should('be.visible');

    // Ensure the review textarea is visible before entering a review
    cy.get('textarea[name="review"]').should('be.visible');

    // Enter the name of the reviewer in the name input field
    cy.get('#name').type('Test Review');
    
    // Enter the email of the reviewer in the email input field
    cy.get('#email').type('test99@test.com');
    
    // Enter the review score in the review input field
    cy.get('#review').type('5/5');

    // Click the 'Submit' button to submit the review
    cy.get('#button-review').click();

    // Verify that a success message appears after the review is submitted
    cy.contains('Thank you for your review.').should('be.visible');
});
