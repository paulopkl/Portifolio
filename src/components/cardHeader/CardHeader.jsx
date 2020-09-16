import React from 'react';

import Autor from '../../assets/Autor.jpg';

import styled from 'styled-components';

import { GrLocation } from 'react-icons/gr';

import { GiBrazil } from 'react-icons/gi';

const Header = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media(max-width: 700px) {
    width: 80%;
  }

  hr {
    width: 100%;
    border-bottom: 0px;
  }

`;

const Name = styled.h1`

  color: rgb(52, 111, 201);
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 700;

`;

const Sub = styled.p`

  font-size: 1.3rem;
  font-weight: 100;
  color: rgb(70, 70, 70);
  margin: 0;

  strong {
    font-weight: bold;
  }

`;

const Location = styled.p`

  font-size: 1.3rem;

`;

const LocationIcon = styled(GrLocation)`

  margin-right: 0.8rem;
  color: rgb(76, 76, 76);

`;

const Image = styled.img`
  
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 7px solid rgb(96, 126, 143);
  margin-top: -5rem;
  box-shadow: 0px 4px 20px rgb(137, 140, 196);

`;

const Flex = styled.div`

  display: flex;
  align-items: center;

`;

const BrIcon = styled(GiBrazil)`

  color: green;
  margin-left: 7px;

`;

const cardHeader = () => {
  return (
    <Header>
      <Image src={Autor} alt="Author" class="dev" />
      <Name>Paulo Ricardo A. de Almeida</Name>
      <Sub>Web Developer from <strong>Brazil</strong><BrIcon /></Sub>
      <Flex>
        <LocationIcon size="35" />
        <Location>Sumaré, São Paulo</Location>
      </Flex>
      <hr />
    </Header>
  );
}

export default cardHeader;