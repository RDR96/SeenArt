import '../styles/thirdContainer.css';

import { Typography, makeStyles } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles(theme => ({
  projectText: {
    textAlign: 'center'
  },
  iconContainer: {
    /* marginTop: 15,
        marginBottom:15, */
    margin: 15
  }
}));

const ProjectCard = props => {
  const classes = useStyles();
  return (
    <div className="third-container-project-card-container">
      <img
        alt={props.title}
        src={props.image}
        className="third-containe-project-image"
      />
      <Typography variant="h3" className={classes.projectText}>
        {props.title}
      </Typography>
      <div className={classes.iconContainer}>{props.children}</div>
      <Typography className={classes.projectText}>
        {props.description}
      </Typography>
    </div>
  );
};

export default ProjectCard;
