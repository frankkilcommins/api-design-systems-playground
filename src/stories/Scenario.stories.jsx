import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { Scenario } from '../components/Scenario';

import '../styles.css'

const stories = storiesOf('Api Design Systems', module);

stories.add('Scenario', () => {

    const scenarios = [
        {
            "description": "SB-API-010 - Only apply standard HTTP methods",
            "when": [
              "http",
              "transaction"
            ],
            "then": [
              {
                "subject": [
                  "http",
                  "request",
                  "method"
                ],
                "level": "may",
                "values": [
                  "get",
                  "post",
                  "put",
                  "patch",
                  "delete"
                ]
              },
              {
                "subject": [
                  "http",
                  "request",
                  "header"
                ],
                "level": "may",
                "values": [
                  "Accept",
                  "Accept-Charset",
                  "Authorization",
                  "Content-Language",
                  "Content-Type",
                  "Link",
                  "Prefer"
                ]
              },
              {
                "subject": [
                  "http",
                  "response",
                  "header"
                ],
                "level": "may",
                "values": [
                  "Content-Language",
                  "Content-Type",
                  "Link",
                  "Location",
                  "Prefer"
                ]
              },
              {
                "subject": [
                  "http",
                  "request",
                  "header",
                  "Content-Type"
                ],
                "level": "may",
                "values": [
                  "application/json",
                  "application/hal+json"
                ]
              },
              {
                "subject": [
                  "http",
                  "response",
                  "header",
                  "Content-Type"
                ],
                "level": "should",
                "values": [
                  "application/hal+json"
                ]
              },
              {
                "subject": [
                  "http",
                  "response",
                  "header",
                  "Content-Type"
                ],
                "level": "may",
                "values": [
                  "application/json",
                  "application/hal+json",
                  "application/problem+json"
                ]
              }
            ]
          }
    ];

    return (
        <>
        <div className='swagger-ui'>
            <div className="information-container wrapper">
                <section class="block col-12 block-desktop col-12-desktop">
                    <div className="no-margin">
                        <Scenario scenario={scenarios[0]} key='0'/>
                    </div>
                    
                </section>                
            </div>            
        </div>
            
        </>
    );
});