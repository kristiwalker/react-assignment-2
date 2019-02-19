/* jshint esversion: 6 */

import React from 'react';

const validation = (props) => {
    let lengthMsg = 'Text long enough';

    if (props.textLength <= 5) {
        lengthMsg = 'Text too short';
    }

    return (
        <div>
            <p>{lengthMsg}</p>
        </div>
    )
};

export default validation;
