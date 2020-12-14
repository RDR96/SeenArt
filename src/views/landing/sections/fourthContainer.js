import React from "react"
import "../styles/agentContainer.css"
import {Button, Typography, makeStyles} from "@material-ui/core"

const useStyles  = makeStyles(() => ({
    agentNameLabel: {
        marginTop: 15,
    }
}))


const FourthContainer = () =>  {
    const classes = useStyles()
    return (
        <div className="agent-container">
    
            <div className="agent-container-image-background-container"/>
            <div className="agent-container-content-container">
                <div className="agent-container-label-section">
                    <div className="agent-container-label-container">
                    <Typography variant="h2" color="textSecondary" className="agent-container-section-name">
                    Representantes
                </Typography>
                    </div>
                </div>
                <div className="agent-container-agents-images-container">
                    <div className="agent-info-container">
                    <Typography variant="h3" color="textSecondary" className={classes.agentNameLabel}>
                        Peter Kingleman
                    </Typography>
                    <img src={require("src/assets/images/agent_1.png")} className="agent-image" />
                  
                    </div>
                    <div className="agent-info-container">
                    <Typography variant="h3" color="textSecondary" className={classes.agentNameLabel}>
                        Marie Vigil
                    </Typography>
                    <img src={require("src/assets/images/agent_2.png")} className="agent-image" />
                  
                    </div>
                    
                </div>
                
            </div>
        </div>  
    )
}

export default FourthContainer