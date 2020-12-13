// ...cypress clearing browser cache for each spec file


context( 'testing 01_micro_spec', () => {

    // // 1***
    it( 'asserts no bad events', () => {

        cy.noBadEvents();

    });



    it( 'asserts total number of good events', () => {

        cy.numGoodEvents( 19 );

    });



    it( 'asserts number events by eventType', () => {

        cy.eventsWithEventType( "page_view", 4 );
        cy.eventsWithEventType( "struct", 11 );
        cy.eventsWithEventType( "unstruct", 4 );

    });



    it( 'asserts (3 different ways) that received event with submit_form schema and with matching values', () => {

        const submitFormSchema = "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0";

        cy.eventsWithSchema( submitFormSchema, 1 );

        cy.eventsWithProperties( {

            "schema": submitFormSchema,
            "values": {

                "formId": "myform",
                "elements": [{

                    "name": "user_email",
                    "value": "fake@email.com",
                    //"nodeName": "INPUT",
                    //"type": "email"

                }]

            }

        }, 1 );

        // also without the schema key in event_options
        cy.eventsWithProperties( {

            "values": {

                "formId": "myform",
                "elements": [{

                    "name": "user_email",
                    "value": "fake@email.com",
                    "nodeName": "INPUT",
                    //"type": "email"

                }]

            }

        }, 1 );

    });

});
