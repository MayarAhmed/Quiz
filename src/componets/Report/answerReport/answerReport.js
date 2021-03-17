import React from 'react'
import classes from './answerReport.css'
export default function answerReport(props) {
    return (
        <div className={classes.report}>
            <p className={classes.answer}>{props.answer}</p>
            <p className={classes[props.accuracy]}>{props.accuracy}</p>
        </div>
    )
}
