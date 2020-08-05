context( 'index: link click', () => {

    it( 'clicks on demo link: 3 events', () => {

        // visit index
        // EVENTS: +1 [ pageview ]
        cy.visit( '/index.html' );

        // click on Demo-link
        // EVENTS: +2 [ link_click, pageview ]
        cy.get( 'a[href*="demo"]' ).click();

    });

});
