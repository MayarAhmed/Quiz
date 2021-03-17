import React from 'react'
import classes from './Button.css'

export default function (props) {
    return (
        <div style={{margin:'0 auto'}}>
            <button 
            className={[classes.btn, classes[props.btntype]].join(' ')}
            disabled={props.disabled}
            onClick={props.clicked}
            {...props}>
                {props.children}
            </button>
        </div>
    )
}
