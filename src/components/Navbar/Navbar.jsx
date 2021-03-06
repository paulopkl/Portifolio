import React from 'react';

import { Link } from 'react-router-dom';

import JS from '../../assets/javascript.jpg';

import styled from 'styled-components';
import { connect } from 'react-redux';

const Navbar = styled.nav`

    width: 100%;
    background: linear-gradient(150deg, #0A210C, #08415C);
    height: 12vh;
    box-shadow: 0px -3px 10px #adaa0d;
    top: 0;
    padding: 0 5rem 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    
    @media(max-width: 590px) {
        padding: 0 1rem 0 0;
    }

`;

const Title = styled.h1`

    margin: 0;
    color: rgba(0, 0, 0, 0.1);
    text-shadow: 1px -1px 0px #D6FFD9, -1px 1px 4px #1FB836, -1px 4px 5px #1F85B8;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    height: 100%;

`;

const ComeBack = styled(Link)`

    transition: 1s;
    text-decoration: none;
    font-size: 1.3rem;
    border: 1.5px solid #fdfde5;
    border-radius: 5px;
    color: #fdfde5;
    padding: 2px 10px;

    &:hover {
        transition: 1s;
        background-color: rgba(253, 253, 229, 0.5);
    }

`;

const Img = styled.img`

    width: 15vw;
    height: 100%;
    margin: 0 2rem;
    
    @media(max-width: 590px) {
        width: 33vw;
        margin: 0 0.5rem 0 0;
    }

`;

const NavbarComponent = props => {
    return (
        <header>
            <Navbar className="navbar">
                <Title>
                    <Img src={JS} alt="Code" />
                    Web Developer
                </Title>
                <ComeBack to="/">{props.language === 'English' ? <>Back</> : <>Voltar</>}</ComeBack>
            </Navbar>
        </header>
    );
}

const mapStateToProps = state => {
    return { language: state.language.language }
}

const navbarComponent = connect(mapStateToProps)(NavbarComponent);

export default navbarComponent;