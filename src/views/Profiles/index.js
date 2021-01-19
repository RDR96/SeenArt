import React from "react"
import {Grid} from "@material-ui/core"
import Header from "src/components/landingHeader"
import Footer from "src/components/footer"

import ProfileCard from "./cards/ProfileCard"
import MainTitleContainer from "src/components/mainTitleContainer"
import "./styles/profilesStyles.css"

const profiles = [
    {image: require("src/assets/images/profile1.png"), name: "Marie Vigil", description: "tiene una larga trayectoria, es  muy profesional en su trabajo"},
    {image: require("src/assets/images/profile2.png"),name: "Peter Kingleman", description: "tiene una larga trayectoria, es  muy profesional en su trabajo"}
]

const Profiles = () => {            

    return (
        <div className="profiles-view-container">
            <Header />
            <MainTitleContainer title="Representantes de SEEN ART"/>    
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} className="profiles-view-grid-container">
                <ProfileCard {...profiles[0]}/>
                    </Grid>
                    <Grid item xs={12} md={6} className={"profiles-view-grid-container"}>
                    <ProfileCard {...profiles[1]}/>
                    </Grid>
            </Grid>            
            <Footer />
        </div>
    )
}

export default Profiles