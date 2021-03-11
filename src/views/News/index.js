import './styles/newsStyles.css';

import Footer from 'src/components/footer';
import Header from 'src/components/landingHeader';
import MainTitleContainer from 'src/components/mainTitleContainer';
import NewsCard from './cards/NewsCard';
import React from 'react';

const news = [
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
    description:
      ''
  },
  {
    image: require('src/assets/images/project3.png'),
    name: 'Entrega de juguetes',
    description:
      ''
  }
];

const Projects = () => {
  return (
    <div className="news-view-container">
      <Header />
      <MainTitleContainer title="NOTICIAS" />
      <div className="news-view-content-container">
        {news.map(newItem => {
          return <NewsCard {...newItem} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
