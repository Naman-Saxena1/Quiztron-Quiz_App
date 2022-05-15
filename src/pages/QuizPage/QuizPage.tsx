import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch} from "../../redux/hooks"
import {
    setUserAsLoggedIn,
    setUserAsLoggedOut
} from "../../redux/index"
import { QuizCardProps } from "../../types/index"
import { Button, Typography } from "@mui/material"
import jwt_decode from "jwt-decode"
import {
    QuizQuestion,
    QuizRules
} from "../../components/index"
import "./quiz-page.css"
import { notify } from "../../App";

const QuizPage = () => {
    const { isUserLogin }= useAppSelector(state => state.userLoginReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const state = location.state as QuizCardProps;
    const { quiz } = state;
    const {
        name,
        quizImageUrl,
        questionsAndAnswers
    } = quiz
    const [ selectedOptionResult, setSelectedOptionResult ] = useState<Boolean[]>([])
    const [ isQuizSubmitted, setIsQuizSubmitted ] = useState(false)
    const [ quizScore, setQuizScore ] = useState(0)
    const [ showRulesModal, setShowRulesModal ] = useState(true)

    useEffect(()=>{
        const token=localStorage.getItem('quiztron-user-token')
        if(token)
        {
          const user = jwt_decode(token)
          if(!user)
          {
            localStorage.removeItem('quiztron-user-token')
            dispatch(setUserAsLoggedOut())
            navigate('/login')
            notify("Kindly Login!")
          }
          else
          {
            dispatch(setUserAsLoggedIn())  
          }
        }
        else
        {
            navigate('/login')
            notify("Kindly Login!")
        }
    },[isUserLogin])

    useEffect(()=>{
        if(showRulesModal)
        {
            document.body.style.overflow = 'hidden'
        }
        else
        {
            document.body.style.overflow = 'visible'
        }
    })

    const submitQuizResponse = () => {
        setQuizScore(0)
        selectedOptionResult.forEach(isCorrectResponse=>{
            if(isCorrectResponse)
            {
                setQuizScore(prevScore=>prevScore+1)
            }
        })
        setIsQuizSubmitted(true)
    }

    return (
        <>
        {
            showRulesModal && <QuizRules setShowRulesModal={setShowRulesModal}/>
        }
        <div className="quiz-page">
            
            <Typography 
                variant='h3'
                className="quiz-heading"
                sx={{py:3}}
            >
                {name}
            </Typography>
            <img
                src={quizImageUrl}
                alt={name}
                className="quiz-cover-image"
            >
            </img>
            {
                questionsAndAnswers.length>0 && (
                    (
                        <div>
                        {
                            questionsAndAnswers.map((questionsDetails,index)=>{
                                return  <QuizQuestion 
                                            key={index} 
                                            questionNumber={index+1} 
                                            questionsDetails={questionsDetails}
                                            setSelectedOptionResult={setSelectedOptionResult}
                                            isQuizSubmitted={isQuizSubmitted}
                                        />
                            })
                        }
                        </div>
                    )
                )
            }
            <Button
                variant="contained"
                color="primary"
                sx={{
                    width:1,
                    mt: 8
                }}
                onClick={submitQuizResponse}
            >
                Submit
            </Button>
            {
                isQuizSubmitted && (
                    <Typography 
                        variant="h5"
                        className="final-score"
                        sx={{
                            mt:13
                        }}
                    >
                        Your Score: {quizScore}/10 {quizScore>4?"🥳":"😔"}
                    </Typography>
                )
            }
        </div>
        </>
    )
}

export { QuizPage }