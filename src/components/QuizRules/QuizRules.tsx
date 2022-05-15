import { Button } from "@mui/material"
import { 
    QuizRulesModalProps
} from "../../types"
import "./quiz-rules.css"

const QuizRules = (props:QuizRulesModalProps) => {
    const {
        setShowRulesModal
    } = props
    return (
        <div className="quiz-rules-modal">
            <div className="quiz-rules-container">
                <h2 className="quiz-rules-heading">Rules</h2>
                <ol className="list-of-rules">
                    <li><p>It is a multiple choice question quiz.</p></li>
                    <li><p>There will be 10 questions</p></li>
                    <li><p>For each correct answer you get 1 point 🥳</p></li>
                    <li><p>For each unattempted answer you get 0 point 😔</p></li>
                    <li><p>There is no negative marking for wrong answers 🙃</p></li>
                </ol>
                <Button
                    variant="contained"
                    disableElevation
                    sx={{
                        mt: 3
                    }}
                    onClick={()=>setShowRulesModal(false)}
                >
                    Start quiz
                </Button>
            </div>
        </div>
    )
}

export { QuizRules }