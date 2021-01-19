import React from "react"
import {Typography, makeStyles, Link} from "@material-ui/core"
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    labelText: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: 30,
        textDecorationStyle: "solid",
        marginBottom: 20
    },
    icon: {
        fontSize: 60,
        color: "#075f85",
        cursor: "pointer"
    }
}))

const ProfileCard = ({image, name, description}) => {
    const classes = useStyles()
    return(
        <div className="profiles-view-card-container">
            <div className="profiles-view-image-container">
            <img alt={name} src={image} className="profiles-view-card-image"/>
            <div className="profiles-view-social-container">
                <Link href="http://www.youtube.com">
                    <TwitterIcon className={classes.icon}/>
                </Link>
                <Link href="http://www.youtube.com">
                    <LinkedInIcon className={classes.icon}/>
                </Link>                
            </div>
            </div>            
            <div className="profiles-view-card-info-container">
            <Typography className={classes.labelText} variant="h3" color="secondary">
                    {name}
                </Typography>
                <Typography  variant="h4" color="textPrimary">
                    {description}
                </Typography>
            </div>
        </div>
    )
}

export default ProfileCard