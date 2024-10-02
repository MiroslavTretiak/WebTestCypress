
it('should show "All Products" and product detail page', () =>{

    cy.visit('http://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.contains('All Products').should('be.visible');
    cy.get('.features_items').should('be.visible');

    cy.get('#search_product').should('be.visible').type('Top');
    cy.get('#submit_search').click();

    cy.contains('Searched Products').should('be.visible');

    cy.get('.features_items .productinfo').filter(':contains("Top")').should('have.length.greaterThan', 0);
    });
