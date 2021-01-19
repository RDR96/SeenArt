import React from "react"
import {Grid, Typography, makeStyles} from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import "../styles/contactView.css"

const useStyles = makeStyles(theme => ({
  labelText: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: 30,
        textDecorationStyle: "solid",
        marginBottom:20 
        
    },
    textContainer: {
        display: "flex",
        flexDirection: "column"
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",                    
        marginBottom: 20
   },
   infoTextContainer: {
    marginLeft: 10
   },
   leftGridContainer: {
       paddingLeft: 50
   }

}))

const ContactInfo = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} className="contact-view-left-grid">
                <Typography className={classes.labelText} variant="h4" color="secondary">
                    Escribenos
                </Typography>
                <div className={classes.infoContainer}>                    
                    <PhoneIcon  />
                    <div className={classes.infoTextContainer}>
                        <Typography variant="h4">
                            Teléfono:
                        </Typography>                   
                        <Typography className={classes.infoText}>
                        +503 22437490
                        </Typography>
                    </div>
                  
                </div>
                <div className={classes.infoContainer}>                    
                    <MailOutlineIcon  />
                    <div className={classes.infoTextContainer}>
                        <Typography variant="h4">
                            Correo:
                        </Typography>                   
                        <Typography className={classes.infoText}>
                        info@fundacionseenart.com
                        </Typography>
                    </div>
                  
                </div>
                <div className={classes.infoContainer}>                    
                    <RoomIcon  />
                    <div className={classes.infoTextContainer}>
                        <Typography variant="h4">
                            Dirrección:
                        </Typography>                   
                        <Typography className={classes.infoText}>
                        Boulevard el Hipódromo 237 Edificio San Benito, local 1 segunda planta, Zona Rosa.
                        </Typography>
                    </div>
                  
                </div>
             </Grid>
             
        </Grid>
    )
}

export default ContactInfo