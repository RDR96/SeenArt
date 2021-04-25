import './styles/projectStyles.css';

import Footer from 'src/components/footer';
import Header from 'src/components/landingHeader';
import MainTitleContainer from 'src/components/mainTitleContainer';
import ProjectCard from './cards/ProjectCard';
import React, { useEffect, useState } from 'react';
import Services from '../../services/index';

const projects = [
  {
    image: require('src/assets/images/project1.png'),
    name: 'Jornadas médicas',
    description:
      'En la búsqueda de mejorar la calidad de vida de las personas la fundación seen art realizo la primer jornada medica que se brindo en las instalaciones del Ingeno Jiboa en San Vicente. Esta jornada se realizo con el apoyo de médicos voluntarios los cuales brindaron las consultas medicas generales en las cuales un aproximado de 200 personas fueron beneficiadas. La entrega de medicamentos como de vitaminas fueron completamente gratis.' +
      'Este tipo de actividades reafirma nuestro compromiso por ayudar a las personas.'
  },
  {
    image: require('src/assets/images/project2.png'),
    name: 'Visita Hospital Bloom',
    description: ''
  },
  {
    image: require('src/assets/images/project3.png'),
    name: 'Entrega de juguetes',
    description: ''
  }
];

const Projects = () => {

  const [postsState, setPosts] = useState([]);

  useEffect(() => {

    Services.posts.getPosts().then((posts) => {
      setPosts(posts);
    });

  });

  return (
    <div className="project-view-container">
      <Header />
      <MainTitleContainer title="PROYECTOS" />
      <div className="project-view-content-container">
        {postsState.map(project => {
          return <ProjectCard {...project} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
