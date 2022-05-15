import { Link } from "react-router-dom" 
import {
    Button
} from "@mui/material"
import {
    GenreCardProps
} from "../../types/index"

const GenreCard = ({imgSrc, genreName, noOfQuizzesAvailable}:GenreCardProps) => {
    let genretype = genreName.toLowerCase()

    return (
        <div className="category-card">
            <img 
                className="category-card-img" 
                src={imgSrc}
                alt={genreName}
            ></img>
            <div className="category-card-footer">
                <div className="category-card-details">
                    <h3>Genre : {genreName}</h3>
                    <p>Quizzes : {noOfQuizzesAvailable}</p>
                </div>
                <Link to={`/genre/${genretype}`} state={{genre:genreName}} className='react-router-link-no-style'>
                    <Button 
                        variant="contained"
                        sx={{
                            bgcolor:'secondary.main',
                            textTransform: 'none'
                        }}
                        disableElevation
                    >
                        View Quizzes
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export { GenreCard }