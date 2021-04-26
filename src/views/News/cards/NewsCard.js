import { Button, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

import Services from '../../../services/index';

const useStyles = makeStyles(() => ({
  infoText: {
    marginBottom: 15
  }
}));

const NewsCard = ({ image, name, description }) => {
  const classes = useStyles();
  const [imageState, setImage] = useState('');

  useEffect(() => {
    Services.media.getImages(image).then(image => {
      setImage(image);
    });
  });

  return (
    <div className="news-view-card-container">
      <div className="news-view-left-container news-left-container-background">
        <img alt={name} src={imageState} className="news-view-image" />
      </div>
      <div className="news-view-right-container">
        <Typography variant="h3" className={classes.infoText}>
          {name}
        </Typography>
        <Typography className={classes.infoText}>
          <div
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Typography>

        <Button className="news-view-more-button">
          <Typography color="textSecondary">Ver más</Typography>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
