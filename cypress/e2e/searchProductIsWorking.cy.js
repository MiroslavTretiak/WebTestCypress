it('should find all products that contain the searching product', () => {
    cy.visit(''); 
    cy.get('body').should('contain', 'Home'); // Check home page visibility

    cy.contains('Products').click(); // Navigate to Products page
    cy.contains('All Products').should('be.visible'); // Verify navigation success
    cy.get('.features_items').should('be.visible'); // Check product section visibility

    const searchingProduct = 'Top'; // Define the product to search

    cy.get('#search_product').should('be.visible').type(searchingProduct); // Enter search term
    cy.get('#submit_search').click(); 

    cy.contains('Searched Products').should('be.visible'); // Check search results header

    cy.get('.features_items .productinfo')
      .filter(`:contains(${searchingProduct})`) // Filter products containing the search term
      .should('have.length.greaterThan', 0); // Assert results exist
});
