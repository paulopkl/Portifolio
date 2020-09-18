import React, { useState } from 'react';

import styled from 'styled-components';

import Programmer from '../../assets/programmer.jpg';

import Lottie from 'react-lottie';
import animationData from './animation.json';

import { AiFillTool } from 'react-icons/ai';

const Main = styled.main`

    box-sizing: content-box;

`;

const Article = styled.article`

    display: flex;
    align-items: center;
    padding: 4rem 14rem 4rem 10rem;
    background-color: rgb(250, 250, 250);
    
    @media(max-width: 1200px) {
        flex-direction: column;
        padding: 2.5rem 1.5rem;
    }

`;

const Datas = styled.div`

    margin-right: 2rem;

    @media(max-width: 420px) {
        margin-right: 0rem;
    }

`;

const Title = styled.h1`

    font-size: 3rem;
    margin: 0;
    color: ${props => props.color ? props.color : ''};
    text-decoration-line: ${props => props.under ? 'underline' : ''};
    
    @media(max-width: 420px) {
        font-size: 2.5rem;
    }

`;

const Section = styled.section`

    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 3rem;

    img {
        width: 100%;
    }

`;

const ProgImage = styled.img.attrs(props => ({ isStyle: props.isStyle || false }))`

    transition: 1s;
    width: 50vw;
    height: 23vh;
    box-shadow: 4px 4px 10px  rgb(30, 50, 104);
    border-radius: 30px 0px;
    
    @media(max-width: 600px) {
        width: 90vw;
        height: 25vh;
    }

    ${props => props.isStyle ? `

        animation: animate 5s ease-in;
        
        @keyframes animate {
            0% {
                box-shadow: 1px 5px 40px  rgb(223, 238, 16);
                transform: rotate(360deg);
                filter: hue-rotate(10deg);
            }
            20% {
                box-shadow: 1px 5px 40px  rgb(219, 16, 238);
                width: 90vw;
                height: 30vh;
                filter: hue-rotate(90deg);
            }
            30% {
                box-shadow: 1px 5px 40px  rgb(16, 223, 238);
                filter: grayscale(50%);
                transform: rotate(-15deg);
            }
            33% {
                box-shadow: 1px 1px 40px  rgb(41, 201, 26);
                // transform: rotate(0deg);
            }
            66% {
                box-shadow: 1px 1px 40px  rgb(26, 43, 201);
            }
            99% {
                box-shadow: 4px 4px 10px  rgb(30, 50, 104);
            }
        }
    
    ` : ''}

`;

const Paragraph = styled.p`

    line-height: 1.6;
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};

`;

const LottieAnim = styled.div`

    width: 50vw;

`;

const MainComponent = () => {

    const [isStyle, setIsStyle] = useState(false);

    const changeStyle = () => setIsStyle(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }

    return (
        <Main>
            <Article>
                <Datas>
                    <Title>Bem-vindo ao meu portfólio</Title>
                    <Paragraph>OnePage feito com ReactJS e estilizado com Styled-Components.</Paragraph>
                    <hr/>
                    <Paragraph>
                        Este portfólio irá se conectar a uma REST API do GitHub, onde será requisitado as 
                        informações dos repositórios e link dos projetos respectivamente. A maioria dos 
                        projetos que serão listados aqui foram feitos sem framework ou com ReactJs                        
                    </Paragraph>
                    <Paragraph>
                        Recentemente venho estudando e praticando em projetos com ReactJS + Redux para criar 
                        interfaces ou features, e Node.js para o back-end.
                    </Paragraph>
                    <Paragraph>           
                        No desenvolvimento do lado do servidor, gosto muito de utilizar o node.js e seus 
                        frameworks como express.js, nodemon e sequilize (ORM - integra o banco de dados). 
                    </Paragraph>
                    <Paragraph>           
                        Meu banco preferido é sem duvidas o MongoDB, mas não tenho restrições para usar o 
                        MySQL apenas acho mais fácil em uma aplicação web armazenar dados em JSON mesmo que
                        em algumas ocasiões o banco NoSQL estejam em desvantagem. 
                    </Paragraph>
                </Datas>
                <ProgImage src={Programmer} isStyle={isStyle} alt="Programmer" onMouseEnter={changeStyle} />
            </Article>
            <Section>
                <a href="https://github.com/paulopkl" target="_blank" rel="noopener noreferrer">
                    <Title color="white" under>
                        Projetos Github 
                    </Title>
                </a>
                <Paragraph color="white" fontSize={'1.25rem'}>
                    Em construção (Building)
                    <AiFillTool size={40} />
                </Paragraph>
                <LottieAnim>
                    <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
                </LottieAnim>
            </Section>
        </Main>
    );
}

export default MainComponent;