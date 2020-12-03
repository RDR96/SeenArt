import React from "react"
import {Box, makeStyles} from "@material-ui/core"
import Page from 'src/components/Page';
import Header from "src/components/landingHeader"


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
      </div>        
    )
}

export default Landing