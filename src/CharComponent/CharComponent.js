/* jshint esversion: 6 */

import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clicked}>
        <p>{props.text}</p>
        </div>
    )
};

export default charComponent;
