import React from 'react';

import Autor from '../../assets/Autor.jpg';

import styled from 'styled-components';

import { connect } from 'react-redux';

import { GrLocation } from 'react-icons/gr';
import { GiBrazil } from 'react-icons/gi';

import Description from './Description';
import Schooling from './Schooling';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media(max-width: 700px) { width: 80%; }

  hr {
    width: 100%;
    border-bottom: 0px;
  }
`;

const Name = styled.h1`
  text-align: center;
  color: rgb(52, 111, 201);
  font-size: 1.5rem;
  margin-top: 3vh;
  font-weight: 700;
`;

const Sub = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 100;
  color: rgb(70, 70, 70);
  margin: 0;

  strong {
    font-weight: bold;
    margin-left: 7px;
    margin-right: 7px;
  }
`;

const Location = styled.p` font-size: 1.3rem; `;

const LocationIcon = styled(GrLocation)`
  margin-right: 1.2vh;
  color: rgb(76, 76, 76);
`;

const Image = styled.img`
  width: 12.5rem;
  height: 13rem;
  border-radius: 50%;
  border: 7px solid rgb(96, 126, 143);
  margin-top: -6.5rem;
  box-shadow: 0px 4px 20px rgb(137, 140, 196);
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const BrIcon = styled(GiBrazil)` color: green; `;

const CardHeader = props => {
  return (
    <Header>
      <Image src={Autor} alt="Author" />
      <Name>Paulo Ricardo A. de Almeida</Name>
      <Sub>
        {props.language === 'English' 
          ? <span>Web Developer from <strong>Brazil</strong></span>
          : <span>Desenvolvedor Web do <strong>Brasil</strong></span>}
        <BrIcon />
      </Sub>
      <Flex>
        <LocationIcon size="35" />
        <Location>Sumaré, São Paulo</Location>
      </Flex>
      <hr />
      <Schooling />
      <hr />
      <Description />
      <hr />
    </Header>
  );
}

const mapStateToProps = state => ({ language: state.language.language });

const cardHeader = connect(mapStateToProps)(CardHeader);

export default cardHeader;