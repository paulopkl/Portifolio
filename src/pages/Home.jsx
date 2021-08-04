import React from 'react';

import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';

import Cup from '../assets/javascript_cup.jpg';
import styled from 'styled-components';

const Template = styled.div`
  background-image: url(${Cup});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Home = () => {
  return (
    <Template>
      <Navbar />
      <Main />
      <Footer />
    </Template>
  );
}

export default Home;