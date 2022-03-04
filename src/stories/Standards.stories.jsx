import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { Standards } from '../components/Standards';

import '../styles.css'

const stories = storiesOf('Api Design Systems', module);

stories.add('Standards', () => {

    const standards = [
        {
            "iri": "urn:ietf:rfc:6648",
            "level": "must",
            "name": "Deprecating the 'X-' Prefix"
          },
          {
            "iri": "urn:ietf:rfc:7807",
            "level": "must",
            "name": "Problem Details for HTTP APIs"
          },
          {
            "iri": "urn:ietf:rfc:7231",
            "level": "should",
            "name": "HTTP 1.1"
          },
          {
            "iri": "urn:ietf:rfc:6585",
            "level": "may",
            "name": "Additional Status Codes"
          },
          {
            "iri": "urn:ietf:rfc:5788",
            "level": "may",
            "name": "IMAP4 Keyword Registry"
          },
          {
            "iri": "urn:ietf:draft:http-semantics",
            "level": "may",
            "name": "HTTP Semantics"
          }
    ];

    return (
        <>
        <div className='swagger-ui'>
            <div className="information-container wrapper">
                <Standards standards={standards}/>
            </div>            
        </div>
            
        </>
    );
});