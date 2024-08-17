import React from 'react';

const FunctionalProps = ({ pro1, pro2, children }) => {
return (
    <div>
        <h2>content us me</h2>
        <p>Pro 1: {pro1}</p>
        <p>Pro 2: {pro2}</p>
        <div>
            <h2>inform: {children}</h2>
        </div>
    </div>
    );
};

export default FunctionalProps;