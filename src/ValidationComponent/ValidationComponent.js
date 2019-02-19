/* jshint esversion: 6 */

import React from 'react';

const validationComponent = (props) => {
    let lengthMsg = 'Text long enough';

    if (props.textLength < 5) {
        lengthMsg = 'Text too short';
    }

    return (
        <div className="ValidationComponent">
            <p>{lengthMsg}</p>
        </div>
    )
};

export default validationComponent;
