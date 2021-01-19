import React from "react"
import {Typography} from "@material-ui/core"
import "../styles/newsContainer.css"

const NewsCard = ({title}) => {
    return (
        <div className="news-container-card">
            <div className="news-container-image-container">
                <img alt={title} src={require("src/assets/images/news_1.png")} className="news-container-news-image"/>
            </div>
            <div className="news-container-news-label-container">
                <Typography variant="h3">
                    {title} 
                </Typography>
            </div>
        </div>
    )
}

export default NewsCard