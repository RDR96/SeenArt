import React from "react"
import {Typography, makeStyles, Grid} from "@material-ui/core"
import FormContact from "./formContactFormat"
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography className={classes.labelText} variant="h4" color="secondary">
                    Escribenos
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormContact />
                </Grid>
            </Grid>
           
        </div>
    )
}

export default ContactForm