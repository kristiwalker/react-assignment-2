/* jshint esversion: 6 */

import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char" onClick={props.clicked}>
            <p>{props.text}</p>
        </div>
    )
};

export default char;
