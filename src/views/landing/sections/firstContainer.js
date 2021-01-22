import { Button, Typography } from "@material-ui/core"
import React from "react"
import {useNavigate} from "react-router-dom"
import "../styles/firstContainer.css"



const FirstContainer = () => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/gallery")
    }

    return (
        <div className="landing-first-container">
            <div className="landing-first-image-mask"/>         
               
            <img alt="firstContainer" src={require("src/assets/images/firstContainer.png")} className="landing-first-background-image"/>     
              
            <Typography variant={"h3"} className="landing-first-text">
                La fundación Seen Art nace en Holanda en 2008 con el objetivo de potenciar el arte y la música.
            </Typography>            
            <Button onClick={handleNavigation} variant="contained" color="primary" className="landing-first-button">
                <Typography color="textSecondary">
                    Galeria
                </Typography>
            </Button>
        </div>
    )
}

export default FirstContainer