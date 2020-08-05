context( 'index: submit form', () => {

    it( 'submits email form: 4 events', () => {

        // visits index (to "return" to index after the demo-click above)
        // EVENTS: +1 [ pageview ]
        cy.visit( '/index.html' );

        // EVENTS: +3 [ focus_form, change_form, submit_form ]
        cy.get( '[data-test=email-input]' )
            .type( 'fake@email.com' );

        cy.get( '[data-test=submit-button]' )
            .click();

    });

});
