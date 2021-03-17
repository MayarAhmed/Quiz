import React from 'react'
import classes from './Input.css'


export default function (props) {
   
    let InputElement = null;

    const inputClasses = [classes.InputElement]
     if(props.invalid && props.touched){
         console.log('touched',props.touched)
        inputClasses.push(classes.Invalid);
     }

    
    return (
        <div className={classes.Input}>
            <div className={classes.InputContainer}>
            <label className={classes.Label}>{props.label}</label>
            <input
            className={inputClasses.join(' ')} 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.changed}/>
            </div>
        </div>
    )
}
