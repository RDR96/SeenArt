import React from "react"
import { Typography } from "@material-ui/core"
import "./styles/mainTitleContainer.css"

const MainTitleContainer = ({title}) => {
    return (
        <div className="main-title-container">
            <div className="main-title-container-image-background-container"/>
            <div className="main-title-content-container">
                <div className="main-title-title-container">
                    <Typography variant="h3" color="textSecondary">
                        {title}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default MainTitleContainer