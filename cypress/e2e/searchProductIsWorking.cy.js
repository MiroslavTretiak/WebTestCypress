it('should find all products that contain the searching product', () => {

    // Visit the homepage of the Automation Exercise website
    cy.visit(''); // Use the correct URL

    // Verify that the home page is visible by checking for the presence of 'Home'
    cy.get('body').should('contain', 'Home');

    // Click on the 'Products' button to navigate to the Products page
    cy.contains('Products').click();

    // Verify that the 'All Products' section is visible, indicating successful navigation
    cy.contains('All Products').should('be.visible');

    // Ensure that the product items section is also visible on the All Products page
    cy.get('.features_items').should('be.visible');

    const searchingProduct = 'Top'; // Ensure searchingProduct is a string

    // Check that the search input field is visible, then type 'Top' into it
    cy.get('#search_product').should('be.visible').type(searchingProduct);

    // Click on the search button to initiate the search
    cy.get('#submit_search').click();

    // Verify that the 'Searched Products' header is visible after the search is performed
    cy.contains('Searched Products').should('be.visible');

    // Filter the product items to check if any contain the word 'Top'
    // Use .filter with string interpolation correctly to assert that results exist
    cy.get('.features_items .productinfo')
      .filter(`:contains(${searchingProduct})`) // Correctly use the variable in filter
      .should('have.length.greaterThan', 0); // Assert that there are more than 0 matching products
});
