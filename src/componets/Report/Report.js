import React from 'react'
import classes from './Report.css'
import AnswerReport from './answerReport/answerReport'
export default function Report(props) {
    console.log('yala',props.history.location.state);
    const answeredArray = [...props.history.location.state]
    console.log(answeredArray)
    return (
        <div className={classes.reportBg}>
        <div className={classes.report}>
            
            <p className={classes.exam}>Your Exam Report</p>
            <div>
                {answeredArray.map((answerText,i)=>{

               return(<div key={i}>
                   <AnswerReport 
                   answer={answerText.answer}
                   accuracy={answerText.id.toString()}/>
                    
                   </div>)
                })}
            </div>
        </div>
        </div>
    )
}
