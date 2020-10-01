import React from 'react';

import styled from 'styled-components';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Code from '../../assets/Code.jpeg';

const Footer = styled.div`

  display: flex;
  width: 66%;
  justify-content: space-around;
  margin: 4rem 0;

  a { text-decoration-line: none; }

  @media(max-width: 1200px) {
    width: 80%;
  }
  
  @media(max-width: 999px) {
    width: 90%;
  }

  @media(max-width: 750px) {
    width: 70%;
    flex-direction: column;
  }
  
  @media(max-width: 380px) {
    width: 90%;
  }

`;

const Email = styled.a`

  transition: 1s;
  color: aliceblue;
  background: linear-gradient(45deg, rgb(60, 190, 250), rgb(56, 80, 190));
  padding: 1rem 5.5rem;
  border-radius: 35px;
  font-size: 1.5rem;
  border: none;

  box-shadow: 0px 2px 15px rgb(82, 105, 184);

  &:hover {
      transition: 1s;
      margin-top: -10px;
      margin-bottom: 10px;
      box-shadow: 0px 5px 25px rgb(82, 105, 184);
  }

  @media(max-width: 750px) {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin-bottom: 10px;
  }

`;

const About = styled.button`

  transition: 1s;
  color: aliceblue;
  background: linear-gradient(45deg, rgb(223, 30, 30), rgb(167, 58, 91), rgb(206, 86, 6));
  padding: 1rem 2rem;
  border-radius: 35px;
  font-size: 1.5rem;
  border: none;
  box-shadow: 0px 3px 15px rgb(182, 108, 79);

  &:hover {
      transition: 1s;
      margin-top: -10px;
      margin-bottom: 10px;
      cursor: pointer;
      box-shadow: 0px 5px 25px rgb(182, 108, 79);
  }

`;

const ModalStyle = styled(Modal)`

  display: flex;
  align-items: center;
  justify-content: center;

`;

const ImgCode = styled.img`

  width: 17em;
  overflow: hidden;
  
  @media(max-width: 480px) {
    display: none;
  }

`;

const Card = styled.div`

  background-color: rgb(232, 231, 250);
  display: flex;
  border: 1px solid #999;
  box-shadow: 0px 4px 20px black;
  padding: 0;

  @media(max-width: 1000px) {
    max-width: 95%;
    max-height: 70%;
  }

  @media(max-width: 580px) {
    max-width: 95%;
    max-height: 80%;
  }

`;

const Datas = styled.div`

  padding: 6rem 1.5rem;
  overflow: scroll;

  @media(max-width: 1000px) {
    padding: 2rem 1rem;
  }

  @media(max-width: 850px) {
    padding: 1.8rem 0.9rem;
  }

  @media(max-width: 380px) {
    padding: 1.8rem 0.9rem;
  }

`;

const Title = styled.h2`

  font-weight: 400;
  font-size: 1.25rem;

  @media(max-width: 380px) {
    margin: 0.5rem 0;
  }

`;

const SubTitle = styled.p`

  font-weight: 300;
  font-size: 1rem;
  margin: 0.3rem 0 0 3rem;

  @media(max-width: 480px) {
    font-size: 1rem;
    margin: 0.9rem 0 0 0rem;
    text-align: center;
  }

`;

const Super = styled.sup`

  background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  font-weight: bold;
  padding: 0 3px;
  border-radius: 10px 0;
  background-size: 400% 400%;
  animation: gradient 1s ease-in infinite;

  a {
    color: #fff;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    33% {
      background-position: 50% 100%;
    }
    66% {
      background-position: 100% 50%;
    }
    99% {
      background-position: 50% 0%;
    }
  }

`;

const CardFooter = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Footer>
      <Email href="mailto:'palmeida.ipms@gmail.com?Subject='Contato de: PAULO RICARDO'">E-Mail</Email>
      <About onClick={handleOpen}>Mais Sobre Mim</About>
      <ModalStyle aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
        open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 1500 }}>
          <Fade in={open}>
            <Card>
              <ImgCode src={Code} alt="code" />
              <Datas>
                <Title>Experiência</Title>
                <SubTitle>
                  Auxiliar Admnistrativo/Monitor de Tacógrafo - 
                  <strong> Aprendiz IPMS</strong>
                  <sup> 2018 - 2019</sup>
                </SubTitle>
                <SubTitle>
                  Suporte em TI - 
                  <strong> Estágio Unicamp</strong>
                  <sup> 2019 - 2020</sup>
                </SubTitle>
                <Title>Formação</Title>
                <SubTitle>
                  Técnico de Informática (Software) - 
                  <strong> EMDR Leandro Franceschini </strong>
                  <sup> 2017 - 2020 </sup>
                </SubTitle>
                <Title>Outros Cursos</Title>
                <SubTitle>
                  MERN Stack React Node Ecommerce from Scratch to Deployment - 
                  <strong> Udemy </strong>
                  <Super>
                    <a href="https://www.udemy.com/certificate/UC-89bb93a5-da74-467d-9425-1152377f30e4/"
                      target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                        Certificado
                    </a>
                  </Super>
                </SubTitle>
                <SubTitle>
                  Curso Web Moderno Completo com JavaScript 2020 + Projetos - 
                  <strong> Udemy </strong>
                  <Super>
                    <a href="https://www.udemy.com/certificate/UC-cc15b25b-87ad-4b2b-b01b-2d1604d9e7ce/"
                      target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                        Certificado
                    </a>
                  </Super>
                </SubTitle>
                <SubTitle>
                  Curso Completo Do Desenvolvedor NodeJS e MongoDB - 
                  <strong> Udemy </strong>
                  <Super>
                    <a href="https://www.udemy.com/certificate/UC-8897bd28-2a81-45d5-b8d6-8d3451ff1b6b/"
                      target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                        Certificado
                    </a>
                  </Super>
                </SubTitle>
                <SubTitle>
                  Curso Web com Angular 9.0 - 
                  <strong> Wincomp </strong>
                  <sup>Certificado</sup>
                </SubTitle>
                <SubTitle>
                  Desenvolvimento de aplicativos com Ionic 3 - 
                  <strong> EvoluaMais </strong>
                  <sup>Certificado</sup>
                </SubTitle>
              </Datas>
            </Card>
          </Fade>
      </ModalStyle>
    </Footer>
  );
}

export default CardFooter;