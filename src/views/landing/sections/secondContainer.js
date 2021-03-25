import React from "react"
import MissionCard from "../cards/missionCard"
import {Button, Typography} from "@material-ui/core"
import {ReactComponent as MissionIcon} from 'src/assets/svgs/missionIcon.svg';
import "../styles/secondContainer.css"

const SecondContainer = () => {
    return (
        <div className="landing-second-container">
            <div className="landing-second-first-container">
                <Button variant="contained" color="primary" className="landing-second-button">
                <Typography variant="h3" color="textSecondary">
                    ¿Cómo donar?
                    </Typography>
                </Button>
                <Button variant="contained" color="primary" className="landing-second-button">
                    <Typography variant="h3" color="textSecondary">
                        Conviertete en voluntario
                    </Typography>
                </Button>
            </div>
            
        </div>
    )
}

export default SecondContainer