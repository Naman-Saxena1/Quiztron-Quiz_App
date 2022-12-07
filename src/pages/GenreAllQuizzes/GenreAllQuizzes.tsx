import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import {
    QuizCard
} from "../../components/index"
import { 
    useAppSelector,
    useAppDispatch
} from "../../redux/hooks"
import {
    GenrePageLocationState
} from "../../types/index"
import {
    setAllQuizzesData
} from "../../redux/index"
import { Typography, Grid } from "@mui/material"
import "./GenreAllQuizzes.css"

const GenreAllQuizzes = () => {
    const { allQuizzesData }= useAppSelector(state => state.allQuizzesReducer)
    const dispatch = useAppDispatch()
    const location = useLocation();
    const state = location.state as GenrePageLocationState; 
    const { genre } = state;

    useEffect(()=>{
        (async()=>{
            let allQuizzesResponse = await axios.get(
                "https://quiztron-server.vercel.app/api/home/allquizzes"
            )
            
            if(allQuizzesResponse.data.status==="ok")
            {
                dispatch(setAllQuizzesData(allQuizzesResponse.data.allQuizzesData))
            }
        })()
    },[])

    return (
        <div className="genre-page">
            <Typography 
                variant='h4'
            >
                {genre}
            </Typography>
            
            <Grid 
                container 
                p={10} 
                rowSpacing={12} 
                columnSpacing={{ xs: 4, sm: 6, md: 16 }}
            >
                {
                    allQuizzesData.map((quiz:any)=>{
                        if(quiz.genre===genre.toLowerCase())
                        {
                            return (
                                <Grid 
                                    key={quiz._id}
                                    item 
                                    xs={12}
                                    sm={12}
                                    md={quiz.genre==="comedy"?12:6}
                                >
                                    <QuizCard quiz={quiz}/>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </div>
    )
}

export { GenreAllQuizzes }