import {
    Button
} from "@mui/material"

import {
    GenreCardProps
} from "../../types/index"

const GenreCard = ({imgSrc, genreName, noOfQuizzesAvailable}:GenreCardProps) => {
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
            </div>
        </div>
    )
}

export { GenreCard }