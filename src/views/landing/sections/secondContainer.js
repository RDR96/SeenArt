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
            <div className="landing-second-second-container">
                <MissionCard  style={{backgroundColor:"#07435E"} } title="Mision" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                    <MissionIcon />
                    </MissionCard>
                <MissionCard  style={{backgroundColor:"#10698F"} } title="Vision" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                    <MissionIcon />
                    </MissionCard>
                <MissionCard  style={{backgroundColor:"#2387B2"} } title="Valores" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                <MissionIcon />
                    </MissionCard>
            </div>            
        </div>
    )
}

export default SecondContainer