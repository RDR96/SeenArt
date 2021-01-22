import React  from "react"

import Header from "src/components/landingHeader"
import Footer from "src/components/footer"

import ProjectCard from "./cards/ProjectCard"
import MainTitleContainer from "src/components/mainTitleContainer"
import "./styles/projectStyles.css"

const projects = [
    {image: require("src/assets/images/project1.png"), name: "Jornadas médicas", description: "tiene una larga trayectoria, es  muy profesional en su trabajo lorem ipsum lat sit amet ipsum lat sit amet , es  muy profesional en su trabajo lorem "},
    {image: require("src/assets/images/project2.png"),name: "Visita Hospital Bloom", description: "En la búsqueda de mejorar la calidad de vida de las personas la fundación seen art realizo la primer jornada medica que se brindo en las instalaciones del Ingeno Jiboa en San Vicente. Esta jornada se realizo con el apoyo de médicos voluntarios los cuales brindaron las consultas medicas generales en las cuales un aproximado de 200 personas fueron beneficiadas. La entrega de medicamentos como de vitaminas fueron completamente gratis. Este tipo de actividades reafirma nuestro compromiso por ayudar a las personas."},
    {image: require("src/assets/images/project3.png"),name: "Entrega de juguetes", description: "tiene una larga trayectoria, es  muy profesional en su trabajo"}
]

const Projects = () => {            

    return (
        <div className="project-view-container">
            <Header />
            <MainTitleContainer title="PROYECTOS"/>    
            <div className="project-view-content-container">
            {projects.map((project) => {
                    return <ProjectCard {...project}/>
                })}
            </div>                    
            <Footer />
        </div>
    )
}

export default Projects