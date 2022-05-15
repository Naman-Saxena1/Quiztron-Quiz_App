import { Link } from "react-router-dom" 
import {
    useAppSelector
} from "../../redux/hooks"
import { notify } from "../../App"
import {
    Button
} from "@mui/material"
import {
    QuizCardProps
} from "../../types/index"

const QuizCard = ({quiz}:QuizCardProps) => {
    const { isUserLogin }= useAppSelector(state => state.userLoginReducer)

    let {name, quizImageUrl} = quiz
    let quizUrlName = name.split(' ').join('').toLowerCase()

    return (
        <div className="category-card">
            <img 
                className="category-card-img" 
                src={quizImageUrl}
                alt={name}
            ></img>
            <div className="category-card-footer">
                <div className="category-card-details">
                    <h3>Quiz : {name}</h3>
                </div>
                <Link to={`/quiz/${quizUrlName}`} state={{quiz:quiz}} className='react-router-link-no-style'>
                    <Button 
                        variant="contained"
                        sx={{
                            bgcolor:'secondary.main',
                            textTransform: 'none'
                        }}
                        onClick={(event)=>{
                            if(isUserLogin===false)
                            {
                                event.preventDefault()
                                notify("Kindly Login!")
                            }
                        }}
                        disableElevation
                    >
                        Play Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export { QuizCard }