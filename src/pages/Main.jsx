import React, { useEffect, useState } from "react";
import CardHeader from "../components/cardHeader/CardHeader";
import CardBody from "../components/cardBody/CardBody";
import CardFooter from "../components/cardFooter/CardFooter";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// Redux Action
import { changeLanguage } from "../redux/action";

// Redux Package
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Styled
import styled from "styled-components";

// Icons
import BrazilIcon from "../assets/brazil.png";
import UnitedStatesIcon from "../assets/united-states.png";

const Card = styled.div`

  background-color: rgb(232, 231, 250);
  border-radius: 15px;
  box-shadow: 15px 15px 30px rgb(0, 5, 48);
  display: flex;
  width: 60%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;

  @media (max-width: 900px) {
    width: 90%;
  }

`;

const Main = styled.main`

  margin: 0;
  background: linear-gradient(
    135deg,
    rgb(80, 150, 255),
    rgb(40, 96, 179),
    rgb(12, 49, 94),
    rgb(0, 15, 58)
  );
  padding-bottom: 4rem;

`;

const CardModal = styled(Modal)`

  display: flex;
  align-items: center;
  justify-content: center;

`;

const Content = styled.div`

    background-color: rgb(232, 231, 250);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #999;
    padding: 0;
    max-width: 50vw;
    max-height: 60vh;

    @media(max-width: 1120px) {
        max-width: 80vw;
        max-height: 65vh;
    }
    
    @media(max-width: 730px) {
        max-width: 90vw;
        max-height: 70vh;
    }
    
    @media(max-width: 360px) {
        max-width: 90vw;
        height: 50vh;
    }

`;

const Img = styled.img`
  
    transition: 1s;
    cursor: pointer;
    width: 45%;
    height: 80%;
    border: 4px solid #444;
    border-radius: 50%;
    box-shadow: ${props => props.isSelected ? '3px 10px 20px rgb(34, 89, 214), -1px -1px 40px rgb(160, 62, 177)' : ''};
    margin: ${props => props.isSelected ? '-10px 3px 10px -3px' : '' };

    &:hover {
        transition: 1s;
        box-shadow: 3px 10px 10px rgb(34, 89, 214), -1px -1px 30px rgb(160, 62, 177);
        margin: -10px 3px 10px -3px;
    }

`;

const Option = styled.li`

  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  @media(max-width: 720px) {
    padding: 1rem;
  }
  
  @media(max-width: 720px) {
    padding: 0rem;
  }

`;

const Select = styled.ul`

  display: flex;
  justify-content: space-evenly;
  padding: 0;

`;

const Title = styled.h1`

  text-align: center;
  padding-top: 2rem;
  font-size: 3rem;
  font-family: "Roboto";
  text-shadow: 1px 1px 1px rgb(34, 89, 214);
  color: ${props => props.color ? props.color : ''};

  @media(max-width: 510px) {
    font-size: 2rem;
  }

`;

const SubTitle = styled.p`

  font-size: 1.5rem;
  font-family: "Roboto";
  font-weight: 500;
  letter-spacing: 5px;
  color: ${props => props.color ? props.color : ''};

  @media(max-width: 470px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }

`;

const ButtonLanguage = styled.button`

    cursor: pointer;
    font-size: 1.5rem;
    margin: 0.8rem 0 0 0;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    height: 50px;
    min-width: 5.5%;
    padding: 0.11% 0.5% 0 0.5%;

`;


const ImgIcon = styled.img`
 
    cursor: pointer;
    width: 78%;
    height: 87%;
    border: 2px solid #444;
    border-radius: 50%;
    box-shadow: ${props => props.isSelected ? 
      '3px 10px 20px rgb(34, 89, 214), -1px -1px 40px rgb(160, 62, 177)' : 
      ''};

`;


const MainComponent = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeLang = (lang) => {
    console.log(lang);
    props.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Main>
      <div>
        <ButtonLanguage type="button" onClick={handleOpen}>
          <ImgIcon src={props.language === 'Portuguese' ? BrazilIcon : UnitedStatesIcon } />
        </ButtonLanguage>
      </div>
      <CardModal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Content>
            <Title color="#373F3F">
              {props.language === "English" ? <>Select the language:</> : <>Selecione o idioma:</>}
            </Title>
            <Select>
              <Option>
                <Img
                  src={BrazilIcon}
                  alt="Brazil"
                  isSelected={props.language === 'Portuguese' ? true : false}
                  onClick={() => changeLang("Portuguese")}
                />
                <SubTitle color="#217B2C">PORTUGUÊS</SubTitle>
              </Option>
              <Option>
                <Img
                  src={UnitedStatesIcon}
                  alt="United_State"
                  isSelected={props.language === 'English' ? true : false}
                  onClick={() => changeLang("English")}
                />
                <SubTitle color="#1D0072">ENGLISH</SubTitle>
              </Option>
            </Select>
          </Content>
        </Fade>
      </CardModal>
      <Card>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </Card>
    </Main>
  );
};

function mapStateToProps(state) {
  return { language: state.language.language };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeLanguage }, dispatch);
};

const mainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);

export default mainComponent;
