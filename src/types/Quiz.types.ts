import { Dispatch, SetStateAction } from "react";

export type QuizRulesModalProps = { 
    setShowRulesModal: Dispatch<SetStateAction<boolean>>; 
}

export type QuizQuestionAndAnswers = {
    questionsDetails: {
        question: string,
        options : {
            optionValue: string,
            isCorrectOption: boolean
        }[]
    },
    questionNumber: number,
    setSelectedOptionResult: Dispatch<SetStateAction<Boolean[]>>,
    isQuizSubmitted: boolean
}

export type QuizCardProps = {
    quiz: {
        name                   : string
        quizImageUrl           : string
        questionsAndAnswers    : 
        {
            question: string,
            options : {
                optionValue: string,
                isCorrectOption: boolean
            }[]
        }[]
        leaderBoard : 
        {
            userName: string,
            highScore: number
        }[],
        genre:string
    }
}