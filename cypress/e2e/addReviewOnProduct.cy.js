it('should allow add review on product', () =>{

    cy.visit('http://automationexercise.com');

    cy.get('body').should('contain', 'Home');

    cy.contains('Products').click();

    cy.contains('All Products').should('be.visible');
    cy.get('.features_items').should('be.visible');

    cy.contains('View Product').click();

    cy.contains('Write Your Review').should('be.visible');

    cy.get('textarea[name="review"]').should('be.visible');

    cy.get('#name').type('Test Review');
    cy.get('#email').type('test99@test.com');
    cy.get('#review').type('5/5');
    cy.get('#button-review').click();

    cy.contains('Thank you for your review.').should('be.visible');
    });