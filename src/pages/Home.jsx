import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../components/assets/banner.png';
import Listing from '../components/AccomodationList';

function Home() {
  const bannerStyle = {
    backgroundImage: 'url(' + BannerImage + ')',
  };

  return (
    <main className='home'>
      <div className='banner' style={bannerStyle}>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
      </div>
      <Listing />
    </main>
  );
}

export default Home;
