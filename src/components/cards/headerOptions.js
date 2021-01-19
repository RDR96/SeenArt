import React from "react"
import "../styles/landingHeader.css"
import {Typography, Button} from "@material-ui/core"
import { useNavigate, useLocation  } from "react-router-dom";

const HeaderOptions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleNavigation  =(routeName) => {
        navigate(routeName);
    }
    
    return (
        <>  
       
            <Button className={`header-option ${location.pathname.replace("/","") === "about" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/about")}>
                    <Typography >
                        Conocenos
                        </Typography>
                        </Button>                                
                <Button className={`header-option ${location.pathname.replace("/","") === "profiles" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/profiles")}>
                    <Typography >
                        Perfiles
                        </Typography>
                        </Button>
                
                
                <Button className={`header-option ${location.pathname.replace("/","") === "projects" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/projects")}>
                    <Typography >
                        Proyectos
                        </Typography>
                        </Button>
                
                
                <Button className={`header-option ${location.pathname.replace("/","") === "news" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/news")}>
                    <Typography >
                        Noticias
                        </Typography>
                        </Button>
                
                
                <Button className={`header-option ${location.pathname.replace("/","") === "alliances" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/alliances")}>
                    <Typography >
                        Alianzas
                        </Typography>
                        </Button>
                
                        <Button className={`header-option ${location.pathname.replace("/","") === "sport" ? "header-option-selected" : ""}`} onClick={() => handleNavigation("/sport")}>
                    <Typography >
                        Futbol ESA/Holanda
                        </Typography>
                        </Button>
                        
                
        </>
    )
}

export default HeaderOptions