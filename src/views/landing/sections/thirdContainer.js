import React from "react"
import {Button, Typography} from "@material-ui/core"
import ProjectCard  from "../cards/projectCard"
import {ReactComponent as IdeaIcon} from 'src/assets/svgs/idea.svg';
import "../styles/thirdContainer.css"


const ThirdContainer = () => {
    
    return (
        <div className="third-container">
            <div className="third-container-first-container">                                
                <Button variant="contained" color="primary" className={"third-container-project-button-container"}>
                    <Typography variant={"h3"} color="textSecondary">
                        Proyectos
                    </Typography>
                </Button>
            </div>
            <div className="third-container-second-container">
                <ProjectCard title="Jornadas médicas" description="loremLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                    <IdeaIcon />
                    </ProjectCard>
                <ProjectCard title="Comedores comunitarios" description="loremLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                <IdeaIcon />
                    </ProjectCard>
                <ProjectCard title="Donaciones y Visitas" description="loremLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.">
                <IdeaIcon />
                    </ProjectCard>
            </div>
        </div>
    )
}

export default ThirdContainer

