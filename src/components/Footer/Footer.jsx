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
    
    @media(max-width: 550px) {
        text-align: center;
        font-size: 1rem;
        width: 75%;
    }
    
    `;

const HeartIcon = styled(FaHeart)`

    color: red;
    margin-left: 0.7rem;
    
    @media(max-width: 550px) {
        margin-left: 0.1rem;
        width: 20px;
    }

`;

function FooterComponent() {
    return (
        <Footer>
            <Title>
                &copy; Copyright Nothing rights Reserved - Paulo Ricardo 
                <HeartIcon size="25" />
            </Title>
        </Footer>
    );
}

export default FooterComponent;