import React from 'react';
import './Button.css';

const buttons = (props) => (
    <div className='button-container'>
        <button className="previous" onClick={() => props.previousFunc()} disabled={props.previous === null ? true : false}>
            Previous
        </button>
        <button className="next" onClick={() => props.nextFunc()} disabled={props.next === null ? true : false}>
            Next
        </button>
    </div>
);

export default buttons;