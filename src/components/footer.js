import React from "react"
import {Typography, makeStyles, Divider, Link} from "@material-ui/core"
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {ReactComponent as SeenArtLogo} from 'src/assets/svgs/seenArtLogo.svg';
import "./styles/contactSection.css"

const useStyles = makeStyles(theme => ({
    iconLabel: {
        marginLeft: 10
    },
    footerText: {
        width: 100
    },
    logoText: {
        position: "relative",
        left: -30,
        width: 115
    },
    scheduleText: {
        marginBottom: 10
    },
    dividerLine: {
        backgroundColor: "white"
    }
}))

const MainFooter = () => {
    const classes = useStyles()
    return (
        <div className="contact-section-container">
            <div className="contact-section-first-container">
                <div className="contact-section-logo-container">
                    <SeenArtLogo />
                    <Typography className={[classes.iconLabel, classes.logoText]} variant="h3" color="textSecondary">
                        Fundación
                        SEEN ART
                    </Typography>
                </div>
                <div className="contact-section-schedules-container">
                <Typography className="contact-section-container-label" variant="h4" color="textSecondary">
                    Horarios de atención
                </Typography>
                <div className="contact-section-info-content">
                
                <Typography  color="textSecondary">
                Lunes a Viernes
                </Typography>
                    <Typography className={classes.scheduleText} color="textSecondary">                                            
                    8:00 AM – 12:00 MD y 
                    1:00 PM – 5:00 PM
                    </Typography>
                    <Typography  color="textSecondary">
                    Sábado
                </Typography>
                    <Typography className={classes.scheduleText} color="textSecondary">                    
                    
                    8:00 AM – 12:00 MD
                    </Typography>
                </div>
                </div>
                <div className="contact-section-contact-info-container">
                <Typography className="contact-section-container-label" variant="h4" color="textSecondary">
                    Contáctanos
                </Typography>
                <div className="contact-section-info-content">
                <div className="contanct-section-icon-container">
                    <CallIcon style={{color: "white"}}/>
                    <Typography className={classes.iconLabel} color="textSecondary">
                        +503 2243 7490
                    </Typography>
                </div>
                <div className="contanct-section-icon-container">
                    <MailOutlineIcon style={{color: "white"}} />
                    <Typography className={classes.iconLabel} color="textSecondary">
                    info@fundacionseenart.com
                    </Typography>
                </div>
                </div>
                
              
                </div>
            </div>  
            <Divider light className={classes.dividerLine}/>
            <div className="contact-section-first-container contact-section-second-container">
                <div className="contact-section-address-container">
                <Typography className="contact-section-container-label contact-section-address-label" variant="h4" color="textSecondary">
                    Dirección:
                </Typography>
                <div className="contact-section-info-content contact-section-address-label">
                <Typography className="contact-section-container-label contact-section-address-label"  color="textSecondary">                
                    Boulevard el Hipódromo 237 Edificio San Benito, local 1 segunda planta, Zona Rosa
                </Typography>
                    
                    </div>
                </div>
                <div className="contact-section-social-container">
                <Typography className="contact-section-container-label" variant="h4" color="textSecondary">
                    Siguenos
                </Typography>
                <div className="contact-section-social-icons-content">          
                <Link href="https://www.facebook.com/fundacionseenartsv/">
                    <FacebookIcon fontSize={"large"} className="contact-section-icon"/>
                    </Link>
                    <Link href="https://www.instagram.com/fundacion_seenart/">
                      <InstagramIcon fontSize={"large"} className="contact-section-icon"/>
                    </Link>
                    <Link href="https://twitter.com/fundacionseen?lang=es">
                    <TwitterIcon fontSize={"large"} className="contact-section-icon"/>
                    </Link>
                    </div>
                </div>
                
            </div>
            <div className="contact-section-last-container">
                <Typography  color={"textSecondary"}>
                © Seen Art Foundation 2015
Organización sin fines de lucro
                </Typography>
            </div>

        </div>
    )
}

export default MainFooter