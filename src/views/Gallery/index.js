import './styles/galleryStyles.css';

import React, { useEffect, useState } from 'react';

import Footer from 'src/components/footer';
import Header from 'src/components/landingHeader';
import ImageCard from './cards/imageCard';
import MainTitleContainer from 'src/components/mainTitleContainer';
import Services from 'src/services';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMedia();
  }, []);

  const getMedia = async () => {
    const values = await Services.media.getMedia();
    setImages(values);
    console.log('values media', values);
  };

  return (
    <div className="gallery-view-container">
      <Header />
      <MainTitleContainer title="Galería" />
      <div className="gallery-view-gallery-container">
        {images.map(image => (
          <ImageCard {...image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
