import '../styles/thirdContainer.css';

import { Button, Typography } from '@material-ui/core';

import { ReactComponent as IdeaIcon } from 'src/assets/svgs/idea.svg';
import ProjectCard from '../cards/projectCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdContainer = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/projects');
  };

  return (
    <div className="third-container">
      <div className="third-container-first-container">
        <Button
          onClick={handleNavigation}
          variant="contained"
          color="primary"
          className={'third-container-project-button-container'}
        >
          <Typography variant={'h3'} color="textSecondary">
            Proyectos
          </Typography>
        </Button>
      </div>
      <div className="third-container-second-container">
        <ProjectCard
          image={require('src/assets/images/project1.png')}
          title="Jornadas médicas"
          description="
En la búsqueda de mejorar la calidad de vida de las personas la fundación seen art realizo la primer jornada medica."
        >
          <IdeaIcon />
        </ProjectCard>
        <ProjectCard
          image={require('src/assets/images/project2.png')}
          title="Comedores comunitarios"
          description="
Nuestro proyecto de Comedores Comunitarios actualmente se encuentran en funcionamiento en varios municipios del pais. "
        >
          <IdeaIcon />
        </ProjectCard>
        <ProjectCard
          image={require('src/assets/images/project3.png')}
          title="Donaciones y Visitas"
          description=""
        >
          <IdeaIcon />
        </ProjectCard>
      </div>
    </div>
  );
};

export default ThirdContainer;
