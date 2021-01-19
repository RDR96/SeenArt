import React, {useState} from "react"
import "./styles/landingHeader.css"
import {ReactComponent as SeenArtLogo} from 'src/assets/svgs/seenArtLogo.svg';
import {ReactComponent as MediumBlueDot} from 'src/assets/svgs/mediumBlueDot.svg';
import {ReactComponent as MediumYellowDot} from 'src/assets/svgs/mediumYellowDot.svg';
import HeaderOptions from "./cards/headerOptions"
import {useLocation, useNavigate} from "react-router-dom"
import { IconButton, Menu, MenuItem,makeStyles } from "@material-ui/core"
import {Menu as MenuIcon} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    optionSelected: {
        backgroundColor: "#e6b802"
    }
}))

const LandingHeader = () => {
    const classes = useStyles()
    const location = useLocation()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (routeName) => {
        navigate(routeName)
        setAnchorEl(null)
    }

    return (
        <div className="header-container">
            <SeenArtLogo />
            <span className="header-logo-text">
                EEN ART
            </span>
            <MediumYellowDot className="header-yellow-dot" />
            <MediumBlueDot className="header-blue-dot"/>
            <div className="header-options-container">
             <HeaderOptions />
            </div>
            <div className="header-menu-button">
                <IconButton onClick={handleMenuClick} aria-label="delete">
                    <MenuIcon />
                </IconButton>
            </div>
            <Menu
  id="header-options-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem className={location.pathname.replace("/","") === "about" ? classes.optionSelected: {}} onClick={() => handleClose("/about")}>Conocenos</MenuItem>
  <MenuItem className={location.pathname.replace("/","") === "profiles" ? classes.optionSelected: {}} onClick={() => handleClose("/profiles")}>Perfiles</MenuItem>
  <MenuItem className={location.pathname.replace("/","") === "projects" ? classes.optionSelected: {}} onClick={() => handleClose("/projects")}>Proyectos</MenuItem>
  <MenuItem className={location.pathname.replace("/","") === "news" ? classes.optionSelected: {}} onClick={() => handleClose("/news")}>Noticias</MenuItem>
  <MenuItem className={location.pathname.replace("/","") === "alliances" ? classes.optionSelected: {}} onClick={() => handleClose("/alliances")}>Alianzas</MenuItem>
  <MenuItem className={location.pathname.replace("/","") === "sport" ? classes.optionSelected: {}} onClick={() => handleClose("/sport")}>Futbol ESA/Holanda</MenuItem>
</Menu>
          
        </div>
    )   
}

export default LandingHeader