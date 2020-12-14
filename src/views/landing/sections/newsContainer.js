import React from "react"
import {Typography, makeStyles} from "@material-ui/core"
import "../styles/newsContainer.css"
import NewsCard from "../cards/newsCard"

const useStyles  = makeStyles(() => ({
    
}))


const NewsContainer  = () => {
    return (
        <div className="news-container">
            <div className="news-container-label-section">
                <div className="news-container-label-container">
                    <Typography variant="h3" color="textSecondary">
                        Noticias
                    </Typography>
                </div>
            </div>
            <div className="news-container-news-container">
                <NewsCard title="Visita a Valle del Sol en Apopa"/>
                <div className="news-container-read-more">
                    <Typography variant="h4">
                        Leer más +
                    </Typography>
                </div>
                <NewsCard title="Celebración Día del Rey"/>                
            </div>

        </div>
    )
}

export default NewsContainer

