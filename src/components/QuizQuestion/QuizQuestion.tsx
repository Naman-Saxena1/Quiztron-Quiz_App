import React, { useState } from "react"
import {
    QuizQuestionAndAnswers
} from "../../types/index"
import "./quiz-question.css"

const QuizQuestion = (props: QuizQuestionAndAnswers) => {
    const {
        questionsDetails: {
            question,
            options
        },
        questionNumber,
        setSelectedOptionResult,
        isQuizSubmitted
    } = props
    const [isOptionSelected, setIsOptionSelected] = useState([false, false, false])

    const selectQuestionOption = (event:React.MouseEvent, option:{optionValue: string,isCorrectOption: boolean}, optionIndex:number) => {
        setSelectedOptionResult((prevResponseArray:Boolean[]):Boolean[]=>{
            prevResponseArray[questionNumber-1] = option.isCorrectOption
            return prevResponseArray
        })
        setIsOptionSelected([false,false,false])
        setIsOptionSelected(prevState=>{
            prevState[optionIndex]=true
            return prevState
        })
    }

    return (
        <div className="quiz-question-container">
            <h3>Question {questionNumber}</h3>
            <p>
                {question}
            </p>
            <div className="quiz-options">
                <ul 
                    className="ul-options"
                >
                    {
                        options.map((option,index)=>{
                            return (
                                <li>
                                    <input 
                                        type="radio" 
                                        id={`question-${questionNumber}-option-${index}`} 
                                        name={`question-${questionNumber}-answer`} 
                                    />
                                    {
                                        isQuizSubmitted ? (
                                            (isOptionSelected[index]&&options[index].isCorrectOption==false) ?
                                            (
                                                <label
                                                    id="wrong-option-selected"
                                                    htmlFor={`question-${questionNumber}-option-${index}`}
                                                    onClick={event=>selectQuestionOption(event,options[index],index)}
                                                >
                                                    {options[index].optionValue}
                                                </label>
                                            ): (
                                                (options[index].isCorrectOption===true) ? (
                                                    <label
                                                        id="correct-option"
                                                        htmlFor={`question-${questionNumber}-option-${index}`}
                                                        onClick={event=>selectQuestionOption(event,options[index],index)}
                                                    >
                                                        {options[index].optionValue}
                                                    </label>
                                                ) : (
                                                    <label
                                                        htmlFor={`question-${questionNumber}-option-${index}`}
                                                        onClick={event=>selectQuestionOption(event,options[index],index)}
                                                    >
                                                        {options[index].optionValue}
                                                    </label>
                                                )
                                            )
                                        ): (
                                            <label
                                                htmlFor={`question-${questionNumber}-option-${index}`}
                                                onClick={event=>selectQuestionOption(event,options[index],index)}
                                            >
                                                {options[index].optionValue}
                                            </label>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export { QuizQuestion }