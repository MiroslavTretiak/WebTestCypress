it('should allow adding a review on a product', () => {
  
    cy.visit('');

    // Check if the home page is visible
    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    // Verify 'All Products' page
    cy.contains('All Products').should('be.visible');
    cy.get('.features_items').should('be.visible');

    cy.contains('View Product').click();

    // Check if the review section is visible
    cy.contains('Write Your Review').should('be.visible');
    cy.get('textarea[name="review"]').should('be.visible');

    // Fill out the review form
    cy.get('#name').type('Test Review');
    cy.get('#email').type('test99@test.com');
    cy.get('#review').type('5/5');

    // Submit the review
    cy.get('#button-review').click();

    // Verify success message
    cy.contains('Thank you for your review.').should('be.visible');
});
