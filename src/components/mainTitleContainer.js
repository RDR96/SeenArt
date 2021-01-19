import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import "./styles/mainTitleContainer.css"

const useStyles = makeStyles(theme => ({
    centeredText: {
        textAlign: "center"
    }
}))

const MainTitleContainer = ({title}) => {
    const classes = useStyles()
    return (
        <div className="main-title-container">
            <div className="main-title-container-image-background-container"/>
            <div className="main-title-content-container">
                <div className="main-title-title-container">
                    <Typography className={classes.centeredText} variant="h3" color="textSecondary">
                        {title}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default MainTitleContainer