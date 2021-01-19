import React from "react"
import {Typography, makeStyles, Button} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    infoText: {
        marginBottom: 15
    },
}))

const NewsCard = ({image, name, description}) => {
    const classes = useStyles()

    return (
        <div className="news-view-card-container">
            <div className="news-view-left-container news-left-container-background">
                <img alt={name} src={image} className="news-view-image"/>
            </div>
            <div className="news-view-right-container">
                <Typography variant="h3" className={classes.infoText}>
                    {name}
                </Typography>
                <Typography  className={classes.infoText}>
                    {description}
                </Typography>

                <Button className="news-view-more-button">
                    <Typography color="textSecondary">
                        Ver más
                    </Typography>
                    
                </Button>

            </div>
        </div>

    )
}

export default NewsCard