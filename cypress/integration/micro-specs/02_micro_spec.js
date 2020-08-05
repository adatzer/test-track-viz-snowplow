// ...cypress clearing browser cache for each spec file


context( 'testing 02_micro_spec', () => {

    // // 1***
    it( 'asserts no bad events', () => {

        cy.noBadEvents();

    });



    it( 'asserts received a se event because of Pause button click', () => {

        const pause_params =
              {
                  "e": "se",
                  "se_ca": "Interaction",
                  "se_ac": "PR",
                  "se_la": "Pause",
                  "se_pr": "byButton"
              };

        cy.eventsWithParams( pause_params, 1 );

    });



    it( 'asserts (2 ways) that received events with pv_webgl context', () => {

        const pv_webgl_schema = 'iglu:test.adatzer.iglu/pv_webgl/jsonschema/1-0-0';

        const pv_webgl_data = { "needsWebGL": true };

        cy.eventsWithProperties( {

            "contexts": [ { "schema": pv_webgl_schema, "data": pv_webgl_data} ]

        }, 2 );

        // OR
        cy.eventsWithContexts( [ { "schema": pv_webgl_schema, "data": pv_webgl_data} ], 2 );

    });



    it( 'asserts received events with br_webgl context', () => {

        const br_webgl_schema = 'iglu:test.adatzer.iglu/br_webgl/jsonschema/1-0-0';

        cy.eventsWithContexts( [ { "schema": br_webgl_schema } ], 2 );

    });



    it( 'asserts received events with both pv_webgl and br_webgl contexts', () => {

        const br_gl_schema = 'iglu:test.adatzer.iglu/br_webgl/jsonschema/1-0-0';
        const pv_gl_schema = 'iglu:test.adatzer.iglu/pv_webgl/jsonschema/1-0-0';

        cy.eventsWithContexts( [ { "schema": pv_gl_schema },
                                 { "schema": br_gl_schema } ],
                               2 );

    });



    it( 'asserts received events with kon_state context', () => {

        const kon_state_schema = 'iglu:test.adatzer.iglu/kon_state/jsonschema/1-0-0';

        cy.eventsWithContexts( [ { "schema": kon_state_schema } ], 11 );

    });

});
