import './styles/profilesStyles.css';

import Footer from 'src/components/footer';
import { Grid } from '@material-ui/core';
import Header from 'src/components/landingHeader';
import MainTitleContainer from 'src/components/mainTitleContainer';
import ProfileCard from './cards/ProfileCard';
import React from 'react';

const profiles = [
  {
    image: require('src/assets/images/profile1.png'),
    name: 'Marie Vigil',
    description:
      'tiene una larga trayectoria, es  muy profesional en su trabajo',
    twitter: 'https://twitter.com/peterklingeman',
    linkedin: 'https://www.linkedin.com/perterklingeman?_l=en_US'
  },
  {
    image: require('src/assets/images/profile2.png'),
    name: 'Peter Kingleman',
    description:
      'tiene una larga trayectoria, es  muy profesional en su trabajo',
    twitter: 'https://twitter.com/peterklingeman',
    linkedin: 'https://www.linkedin.com/perterklingeman?_l=en_US'
  }
];

const Profiles = () => {
  return (
    <div className="profiles-view-container">
      <Header />
      <MainTitleContainer title="Representantes de SEEN ART" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="profiles-view-grid-container">
          <ProfileCard {...profiles[0]} />
        </Grid>
        <Grid item xs={12} md={6} className={'profiles-view-grid-container'}>
          <ProfileCard {...profiles[1]} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Profiles;
