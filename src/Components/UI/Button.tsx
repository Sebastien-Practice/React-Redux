import React from 'react';
import './Button.module.css';


const Button = (props:any) => {

    return (
        <div>
            <button 
            className='button'
            type={props.type || 'button'}
            onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;