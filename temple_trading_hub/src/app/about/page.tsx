import { Container } from '@mui/material';
import '../styles/About.css';
import React from 'react';

const About = () => {
  return (
    <Container className='about-container' maxWidth='lg'>
      <h1>About Temple University Trading Hub</h1>
      <p>
        Temple University Trading is a place where students are able to Buy and
        Sell
      </p>
      <p>
        with each other in a known and safe enviroment. This is a website that
        is meant
      </p>
      <p>
        only with students and employees with a temple email address. Trading
        will be done
      </p>
      <p>
        in a safe designated area around and on campus. We want to make it
        easier for
      </p>
      <p>everyone to buy and sell goods with certainty.</p>
      <p>Join our Owl Trading Community Today!</p>
      <div className='image-container'>
        <img src='/images/Owl.png' alt='Owl' className='owl-image' />{' '}
        {/* Using relative path to the image */}
      </div>
    </Container>
  );
};
export default About;
