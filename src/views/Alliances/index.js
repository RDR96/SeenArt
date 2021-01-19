import React from "react"

import Header from "src/components/landingHeader"
import Footer from "src/components/footer"

import AllianceCard from "./cards/AllianceCard"
import MainTitleContainer from "src/components/mainTitleContainer"
import "./styles/alliancesStyles.css"

const alliances = [
    {image: require("src/assets/images/alliance1.png"), name: "Alcaldía Municipal de San Vicente", },
    {image: require("src/assets/images/alliance2.png"),name: "Alcaldía Municipal de Verapaz", },
    {image: require("src/assets/images/alliance3.png"),name: "Alcaldía Municipal de Jerusalén", },
    {image: require("src/assets/images/alliance1.png"), name: "Alcaldía Municipal de San Vicente", },
    {image: require("src/assets/images/alliance2.png"),name: "Alcaldía Municipal de Verapaz", },
    {image: require("src/assets/images/alliance3.png"),name: "Alcaldía Municipal de Jerusalén", },
    {image: require("src/assets/images/alliance1.png"), name: "Alcaldía Municipal de San Vicente", },
    {image: require("src/assets/images/alliance2.png"),name: "Alcaldía Municipal de Verapaz", },
    {image: require("src/assets/images/alliance3.png"),name: "Alcaldía Municipal de Jerusalén", },
    {image: require("src/assets/images/alliance1.png"), name: "Alcaldía Municipal de San Vicente", },
    {image: require("src/assets/images/alliance2.png"),name: "Alcaldía Municipal de Verapaz", },
    {image: require("src/assets/images/alliance3.png"),name: "Alcaldía Municipal de Jerusalén", },
]

const Alliances = () => {            

    return (
        <div className="alliances-view-container">
            <Header />
            <MainTitleContainer title="ALIANZAS"/>    
            <div className="alliances-view-content-container">
                {alliances.map((alliance) => {
                    return <AllianceCard {...alliance} />
                })}
            </div>                    
            <Footer />
        </div>
    )
}

export default Alliances