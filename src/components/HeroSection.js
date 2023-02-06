import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4' ;

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h1>ARCH</h1>
      <p>La ville de demain</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Acheter
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Présentation <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;