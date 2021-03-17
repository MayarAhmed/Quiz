import React, { useState } from 'react';
import classes from './Test.css'
import Button from '../UI/Button/Button'
import Report from '../Report/Report'
import Modal from '../UI/Modal/Modal'

export default function Test(props) {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showSubmitBtn, setShowSubmitBtn] = useState(false);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [answeredArr,setAnswerArr]= useState([])

	const answerHandler =  (isCorrect,answer) => {
		console.log('firstLog',answer)
		// if (isCorrect) {
		// 	setScore(score + 1);
		// }

  let updateAnswerArr = [...answeredArr]
   updateAnswerArr.push({id:isCorrect,answer:answer})

  setAnswerArr(updateAnswerArr)
 console.log('answered ARR',answeredArr)

 //setting Next Question
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowSubmitBtn(true);
		}
	};

	//Routing to Report
	const submitHandler = () =>{
		props.history.push({pathname:'./Report',state:answeredArr})
	}
	return (
		<div className={classes.test}>
				<div className={classes.questionContainer}>
					<div className={classes.questionSection}>
						<div className={classes.questionCount}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={classes.questionText}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={classes.answerSection}>
						{questions[currentQuestion].answerOptions.map((answerOption,i) => (
							<button
							className={classes.answerBtn} 
							key={i}
							onClick={() => answerHandler(answerOption.isCorrect,answerOption.answerText)}>
								<span className={classes.answerOption}>{answerOption.answerText}</span>
								</button>
						))}
					</div>
					{
					showSubmitBtn ?
					 <Modal
					 answers={answeredArr}/>: null }
					
				</div>
			
		</div>
	);
}