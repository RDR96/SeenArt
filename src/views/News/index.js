import React from "react"

import Header from "src/components/landingHeader"
import Footer from "src/components/footer"

import NewsCard from "./cards/NewsCard"
import MainTitleContainer from "src/components/mainTitleContainer"
import "./styles/newsStyles.css"

const news = [
    {image: require("src/assets/images/project1.png"), name: "Jornadas médicas", description: "tiene una larga trayectoria, es  muy profesional en su trabajo lorem ipsum lat sit amet ipsum lat sit amet , es  muy profesional en su trabajo lorem Lorem ipsum dolor sit ametDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {image: require("src/assets/images/project2.png"),name: "Visita Hospital Bloom", description: "En la búsqueda de mejorar la calidad de vida de las personas la fundación seen art realizo la primer jornada medica que se brindo en las instalaciones del Ingeno Jiboa en San Vicente. Esta jornada se realizo con el apoyo de médicos voluntarios los cuales brindaron las consultas medicas generales en las cuales un aproximado de 200 personas fueron beneficiadas. La entrega de medicamentos como de vitaminas fueron completamente gratis. Este tipo de actividades reafirma nuestro compromiso por ayudar a las personas."},
    {image: require("src/assets/images/project3.png"),name: "Entrega de juguetes", description: "tiene una larga trayectoria, es  muy profesional en su trabajo"}
]

const Projects = () => {            

    return (
        <div className="news-view-container">
            <Header />
            <MainTitleContainer title="NOTICIAS"/>    
            <div className="news-view-content-container">
                {news.map((newItem) => {
                    return <NewsCard {...newItem} />
                })}
            </div>                    
            <Footer />
        </div>
    )
}

export default Projects