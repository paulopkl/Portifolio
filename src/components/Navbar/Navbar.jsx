import React from 'react';

import { Link } from 'react-router-dom';

import JS from '../../assets/javascript.jpg';

import styled from 'styled-components';

const Navbar = styled.nav`

    width: 100%;
    background: linear-gradient(to right, #f1ee0d, #f1ee0d, #f1ee0d, #ddda0d, #adaa0d);
    height: 12vh;
    box-shadow: 0px -3px 10px #adaa0d inset;
    top: 0;
    padding: 0 5rem 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

`;

const Title = styled.h1`

    margin: 0;
    color: #333;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    height: 100%;

`;

const ComeBack = styled(Link)`

    text-decoration: none;
    font-size: 1.3rem;
    border: 1px solid #fdfde5;
    border-radius: 1px;
    color: #fdfde5;
    padding: 2px 10px;

    &:hover {
        transition: 1s;
        background-color: rgba(253, 253, 229, 0.3);
    }

`;

const Img = styled.img`

    width: 15vw;
    height: 100%;
    margin: 0 2rem;

`;

const NavbarComponent = () => {
    return (
        <header>
            <Navbar className="navbar">
                <Title>
                    <Img src={JS} alt="Code" />
                    Web Developer
                </Title>
                <ComeBack to="/">Voltar</ComeBack>
            </Navbar>
        </header>
    );
}

export default NavbarComponent;