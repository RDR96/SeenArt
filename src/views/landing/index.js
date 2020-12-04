import React from "react"
import {makeStyles} from "@material-ui/core"

import Header from "src/components/landingHeader"
import FirstContainer from "./sections/firstContainer"
import SecondContainer from "./sections/secondContainer"


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
      </div>        
    )
}

export default Landing