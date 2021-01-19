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
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className="about-view-container">
            <Header />
            <MainTitleContainer title="Conocenos"/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="about-view-left-grid">
                <Typography variant="body1" className={classes.paragraph}>
                    
                Fundación Stichting Seen Art nace en Holanda en 2008, fundada por Marie Vigil.   
                
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                Su objetivo principal está enfocado en Arte y Musica.  
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
En 2015 Marie visita su tierra natal El Salvador por primera vez en un par de decadas, y decide crear un filial de su fundacion para brindar ayuda a El Salvador.
</Typography >
<Typography variant="body1" className={classes.paragraph}>


​Con la creación de la Fundación Seen Art, se cumplió un deseo largamente esperado de la Sra. Marie Damiaans.
</Typography>
<Typography variant="body1" className={classes.paragraph}>

Marie es bisnieta de una emigrante de Cataluña, España. Quienes radicaron en El Salvador. Aproximadamente a sus 9 años su familia emigró a Estados Unidos. En 1993 el amor la llevo a Holanda.
</Typography>
<Typography variant="body1" className={classes.paragraph}>

El arte es una inspiración importante en su vida y su objetivo es un mejor futuro para todos los niños. “Los niños son el futuro y ellos necesitan apoyo y amor”. 
</Typography>
<Typography variant="body1" className={classes.paragraph}>

Con la lengua universal del arte, la Fundación Seen Art desea iniciar y financiar proyectos que permitan oportunidades para todos los niños del mundo, especialmente Centroamérica.

                </Typography>
                </Grid>
                <Grid item xs={12} md={6} className="about-view-right-grid">
                    <img alt={"conocenos2"} src={require("src/assets/images/conocenos2.png")} className={"about-view-second-image"}/>
                </Grid>
                
            </Grid>
            <Footer />
        </div>
    )
}

export default About