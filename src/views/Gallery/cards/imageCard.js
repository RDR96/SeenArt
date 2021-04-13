import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import '../styles/galleryStyles.css';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  centeredText: {
    textAlign: 'center'
  }
}));

const ImageCard = ({ image, name }) => {
  const classes = useStyles();
  console.log('card', image, name);
  return (
    <div className="gallery-card-container">
      <div className="gallery-card-image-container">
        <img alt={name} src={image} className="gallery-card-image" />
      </div>
      <Typography color={'textPrimary'} className={classes.centeredText}>
        {name}
      </Typography>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string
};

export default ImageCard;
