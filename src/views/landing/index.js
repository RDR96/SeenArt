import React from "react"
import {makeStyles} from "@material-ui/core"

import Header from "src/components/landingHeader"
import FirstContainer from "./sections/firstContainer"
import SecondContainer from "./sections/secondContainer"
import ThirdContainer from "./sections/thirdContainer"
import AgentContainer from "./sections/fourthContainer"
import NewsContainer from "./sections/newsContainer"
import Footer from "src/components/footer"

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      width: "100%",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    }
  }));

const Landing = () => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Header />
        <FirstContainer /> 
        <SecondContainer />
        <ThirdContainer/>
        <AgentContainer />
        <NewsContainer />
        <Footer />
      </div>        
    )
}

export default Landing