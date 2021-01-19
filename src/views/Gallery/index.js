import React from "react"

import Header from "src/components/landingHeader"
import Footer from "src/components/footer"
import ImageCard from "./cards/imageCard"
import MainTitleContainer from "src/components/mainTitleContainer"
import "./styles/galleryStyles.css"

const imagesList = [
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
    {image: require("src/assets/images/gallery1.png"), name: "lorem ipsum este es un mensaje"},
]

const Gallery = () => {
    const images = imagesList
  
    

    return (
        <div className="gallery-view-container">
            <Header />
            <MainTitleContainer title="Galería"/>    
            <div className="gallery-view-gallery-container">
                {images.map(image => <ImageCard {...image}/>)}
            </div>
            <Footer />
        </div>
    )
}

export default Gallery