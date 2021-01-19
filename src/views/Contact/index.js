import React from "react"

import Header from "src/components/landingHeader"
import Footer from "src/components/footer"
import MainTitleContainer from "src/components/mainTitleContainer"
import ContactForm from "./cards/contactForm"
import ContactInfo from "./cards/contactInfo"
import "./styles/contactView.css"

const Contact = () => {
    return (
        <div className="contact-view-container">
            <Header />
            <MainTitleContainer title="Contactos"/>
            <ContactForm />
            <ContactInfo />
            <Footer />
        </div>
    )
}

export default Contact