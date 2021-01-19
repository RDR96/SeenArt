import React from "react"
import {Typography, makeStyles} from "@material-ui/core"


const useStyles = makeStyles(() => ({
    allianceName: {
        textAlign: "center"
    }
}))


const AllianceCard = ({image, name}) => {
    const classes = useStyles()
    return (
        <div className="alliance-view-card-container">
            <div className="alliance-view-image-container">
                <img alt={name} src={image} className="alliance-view-image"/>
            </div>
            <Typography className={classes.allianceName}>
                {name}
            </Typography>
        </div>
    )
}

export default AllianceCard