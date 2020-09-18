import React from 'react';

import styled from 'styled-components';

import { FaHeart } from 'react-icons/fa';

const Footer = styled.footer`

    width: 100%;
    background: linear-gradient(to right, #546aa7, #546aa7);
    height: 15vh;
    display: flex;
    font-weight: bolder;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    z-index: 2;

`;

const Title = styled.h2`

    color: #fff;
    font-weight: 300;
    font-size: 1.25rem;

`;

const HeartIcon = styled(FaHeart)`

    color: red;
    margin-left: 0.7rem;

`;

function FooterComponent() {
    return (
        <Footer>
            <Title>&copy; Copyright - Paulo Ricardo </Title>
            <HeartIcon size="25" />
        </Footer>
    );
}

export default FooterComponent;