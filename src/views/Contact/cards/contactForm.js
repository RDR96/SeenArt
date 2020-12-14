import React from "react"
import {Typography, makeStyles} from "@material-ui/core"
import "../styles/contactView.css"

const useStyles = makeStyles(theme => ({
    labelText: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: 30,
        textDecorationStyle: "solid"
        
    }
}))


const ContactForm = () => {
    const classes = useStyles()
    return (
        <div className="contact-view-form-container">
            <div className="contact-view-form-label-container">
                <Typography className={classes.labelText} variant="h4" color="secondary">
                    Escribenos
                </Typography>
            </div>
            <div className="contact-view-form-content-container">
                
            </div>
        </div>
    )
}

export default ContactForm