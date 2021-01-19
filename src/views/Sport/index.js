import React from "react"
import {Grid, Typography, makeStyles} from "@material-ui/core"
import Header from "src/components/landingHeader"
import Footer from "src/components/footer"
import MainTitleContainer from "src/components/mainTitleContainer"

import "./styles/aboutView.css"

const useStyles = makeStyles(theme =>({
    contactSecondImage: {
        objectFit: "contain",
        width: "100%",
        height: 1000
    },
    paragraph: {
        marginBottom: 20
    },
    labelText: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: 30,
        textDecorationStyle: "solid",
        marginBottom: 20
    },
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className="about-view-container">
            <Header />
            <MainTitleContainer title="FÚTBOL ESA/ HOLANDA"/>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6} className="about-view-right-grid">
                    <img alt="sport1" src={require("src/assets/images/sport1.png")} className={"about-view-second-image"}/>
                </Grid>
                <Grid item xs={12} md={6} className="about-view-left-grid">
                <Typography variant="body1" className={classes.labelText}>
                    Programa de apoyo e intercambio
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                    
                Con  el objetivo de integrar a los jóvenes con discapacidad intelectual, así como crear oportunidades para futbolistas con talento deportivo, la Fundación Seen Art, anuncia que en el mes de mayo viajará un grupo de 25 jóvenes salvadoreños a Holanda. Los primeros 10 han sido seleccionados por Olimpiadas Especiales de El Salvador. Junto a estos jóvenes se sumarán a 15 con talento futbolístico cuya edad oscila entre 16 y 20 años. 


                
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                La selección de estos se hará por medio de una visoria abierta de jóvenes provenientes de las diferentes escuelas de fútbol de todo el país.​Los 25 futbolistas viajarán a Holanda teniendo la oportunidad de participar de un intercambio cultural - deportivo de alto nivel donde realizarán varios juegos con importantes equipos de Holanda que iniciará el 19 de mayo de 2018.​  
                </Typography>               
                </Grid>
               
                
            </Grid>
            <Footer />
        </div>
    )
}

export default About