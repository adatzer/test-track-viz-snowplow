context( 'visit demo', () => {

    before(() => {

        cy.resetMicro();

    });

    describe( 'creating total of 12 events', () => {

        it( 'visits demo', () => {

            // EVENTS: +1 [ pageview ]
            cy.visit( '/demo.html' );

        });


        it( 'interacts with buttons: Pause, Reset', () => {

            // EVENTS: +1 [ structured - Reset by button ]
            cy.get( '[data-test=reset]' ).click();

            // EVENTS: +1 [ structured - Pause by button ]
            cy.get( '[data-test=pause]' ).click();

        });


        it( 'interacts with coordinates buttons', () => {

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=cylindrical]' ).click();
            cy.wait( 2000 );

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=kartesian]' ).click();
            cy.wait( 2000 );

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=spherical]' ).click();
            cy.wait( 2000 );

        });


        it( 'interacts with sync-async draw buttons', () => {

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=async]' ).click();

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=sync]' ).click();

        });


        it( 'interacts with full-grid screen buttons', () => {

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=gridscreen]' ).click();

            // EVENTS: +1 [ structured -   ]
            cy.get( '[data-test=fullscreen]' ).click();

        });


        it( 'interacts with Key events', () => {

            // EVENTS: +1 [ structured - Pause by Space ]
            cy.get('body').type(" ");

            // EVENTS: +1 [ structured - Reset by KeyR ]
            cy.get('body').type("r");

            // EVENTS:
            // cy.get('body').type("{shift}1");

            // EVENTS:
            // cy.get('body').type("1");

            // EVENTS:
            // cy.get('body').type("{shift}2");

            // EVENTS:
            // cy.get('body').type("2");


        });

    });

});
