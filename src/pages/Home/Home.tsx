import { 
    Typography,
    Grid,
} from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import {
    setAllQuizzesData
} from "../../redux/index"
import {
    useAppDispatch
} from "../../redux/hooks"
import {
    GenreCard,
    Footer
} from "../../components/index"
import "./Home.css"

const Home = () => {
    const dispatch = useAppDispatch()

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
        <div className="home-page">
            
            <div className="home-page-cover-container">
                <Typography 
                    variant='h4'
                    className="home-page-cover-heading"
                >
                    It is time to find out if you are a true binge watcher. 🥤😎🍿
                </Typography>
                <img
                    className="home-page-cover-image"
                    src="https://quiztron-basic-version-dev-branch.netlify.app/Images/HomePage/Money-Heist.jpg" 
                    alt="home cover"
                    >
                </img>
            </div>

            <Typography 
                variant='h4'
            >
                Categories
            </Typography>

            <Grid 
                container 
                p={10} 
                rowSpacing={12} 
                columnSpacing={{ xs: 4, sm: 6, md: 16 }}
            >
                <Grid 
                    item 
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <GenreCard
                        imgSrc={"https://quiztron-basic-version-dev-branch.netlify.app/Images/HomePage/Genre-Thriller-Money-heist-3_1920x1280.jpg" }
                        genreName='Thriller'
                        noOfQuizzesAvailable={2}
                    />
                </Grid>
                <Grid 
                    item 
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <GenreCard
                        imgSrc={"https://quiztron-basic-version-dev-branch.netlify.app/Images/HomePage/Genre-Comedy-Friends-2.jpg" }
                        genreName='Comedy'
                        noOfQuizzesAvailable={1}
                    />
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}

export { Home }