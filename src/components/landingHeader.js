import React, {useState} from "react"
import "./styles/landingHeader.css"
import {ReactComponent as SeenArtLogo} from 'src/assets/svgs/seenArtLogo.svg';
import {ReactComponent as MediumBlueDot} from 'src/assets/svgs/mediumBlueDot.svg';
import {ReactComponent as MediumYellowDot} from 'src/assets/svgs/mediumYellowDot.svg';
import HeaderOptions from "./cards/headerOptions"
import { Typography, IconButton, Menu, MenuItem } from "@material-ui/core"
import {Menu as MenuIcon} from "@material-ui/icons"

const LandingHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
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
  <MenuItem onClick={handleClose}>Conocenos</MenuItem>
  <MenuItem onClick={handleClose}>Perfiles</MenuItem>
  <MenuItem onClick={handleClose}>Proyectos</MenuItem>
  <MenuItem onClick={handleClose}>Noticias</MenuItem>
  <MenuItem onClick={handleClose}>Alianzas</MenuItem>
  <MenuItem onClick={handleClose}>Futbol ESA/Holanda</MenuItem>
</Menu>
          
        </div>
    )   
}

export default LandingHeader