import React from "react"
import "../styles/landingHeader.css"
import {Typography} from "@material-ui/core"

const HeaderOptions = () => {
    return (
        <>  
       <div className="header-option">
                    <Typography >
                        Conocenos
                        </Typography>
                </div>
                <div className="header-option">
                    <Typography >
                        Perfiles
                        </Typography>
                </div>
                <div className="header-option">
                    <Typography >
                        Proyectos
                        </Typography>
                </div>
                <div className="header-option">
                    <Typography >
                        Noticias
                        </Typography>
                </div>
                <div className="header-option">
                    <Typography >
                        Alianzas
                        </Typography>
                </div>
                <div className="header-option">
                    <Typography >
                        Futbol ESA/Holanda
                        </Typography>
                </div>
        </>
    )
}

export default HeaderOptions