import React from "react"
import {makeStyles, Typography} from "@material-ui/core"
import "../styles/secondContainer.css"

const useStyles = makeStyles((theme) => ({
   container: {
       display: "flex",
       flex: 1,
       flexDirection: "column",
       padding: 30,
       justifyContent: "center",
       alignItems: "center",
       border: "1px solid red",       
       
   },
   centerText: {
       textAlign: "center",
       marginBottom: 20
   },
   label: {
       marginBottom: 20
   }
}))

const MissionCard = ({title, description, children, style}) => {
    const classes = useStyles()
    return (
        <div className={`second-container-card`} style={style}>
            <Typography variant="h3" color="textSecondary" className={classes.centerText}>
            {title}
            </Typography>
            {children}
            <Typography color="textSecondary" className={classes.centerText}>
            {description}
            </Typography>
        </div>
    )
}

export default MissionCard