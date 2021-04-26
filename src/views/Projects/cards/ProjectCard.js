import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

import Services from '../../../services/index';

const INFO_CONTAINER_CLOSE = true;

const ProjectCard = ({ image, name, description }) => {
  const [infoContainerIsOpen, setInfoContainerState] = useState(
    INFO_CONTAINER_CLOSE
  );
  const infoContainerRef = useRef(null);
  const [imageState, setImage] = useState('');

  useEffect(() => {
    Services.media.getImages(image).then((image) => {
      setImage(image);
    });
  });

  const handleSeeMore = () => {
    setInfoContainerState(!infoContainerIsOpen);
  };

  return (
    <div className="project-view-card-container">
      <div className="project-view-card-image-container">
        <img alt={name} src={imageState} className="project-view-image" />
        <div className="project-view-name-container">
          <div className="project-view-name-label-container">
            <Typography variant="h3" color="textSecondary">
              {name}
            </Typography>
          </div>
          <Button
            onClick={handleSeeMore}
            className="project-view-project-more-button"
          >
            <Typography color="textSecondary">
              {infoContainerIsOpen === INFO_CONTAINER_CLOSE
                ? 'Ver mas'
                : 'Ocultar'}
            </Typography>
          </Button>
        </div>
      </div>
      {infoContainerIsOpen === !INFO_CONTAINER_CLOSE && (
        <div
          ref={infoContainerRef}
          className="project-view-description-container"
        >
          <Typography><div contentEditable='true' dangerouslySetInnerHTML={{__html: description}}/> </Typography>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
