import React from 'react';
import { storiesOf } from '@storybook/react'; 
import { Principles } from '../components/Principles';

import '../styles.css'

const stories = storiesOf('Api Design Systems', module);

stories.add('Principles', () => {

    const principles = [
        {
            "name": "RESTful Robutness Principle",
            "iri": "urn:apidesign.systems:principle:robustness",
            "level": "must"
          },
          {
            "name": "Richardson Maturity Model",
            "iri": "urn:apidesign.systems:principle:rmm:level2",
            "level": "must"
          },
          {
            "name": "Richardson Maturity Model",
            "iri": "urn:apidesign.systems:principle:rmm:level3",
            "level": "should"
          }
    ];

    return (
        <>
        <div className='swagger-ui'>
            <div className="information-container wrapper">
                <Principles principles={principles}/>
            </div>            
        </div>
            
        </>
    );
});