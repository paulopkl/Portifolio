import React, { useState } from 'react';

import styled from 'styled-components';

import Programmer from '../../assets/programmer.jpg';

import Lottie from 'react-lottie';
import animationData from './animation.json';

import { AiFillTool } from 'react-icons/ai';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import axios from 'axios';

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
        font-size: ${props => props.small ? '1.75rem' : '2.5rem'};
        text-align: center;
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
    
    @media(max-width: 420px) {
        padding: 2rem 2rem;
    }
`;

const ProgImage = styled.img.attrs(props => ({ isStyle: props.isStyle || false }))`
    transition: 1s;
    width: 50vw;
    max-width: 50vw;
    height: 23vh;
    box-shadow: 4px 4px 10px rgb(30, 50, 104);
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
                width: 90vw;
                height: 30vh;
                box-shadow: 1px 5px 40px  rgb(219, 16, 238);
                filter: hue-rotate(90deg);
            }
            30% {
                box-shadow: 1px 5px 40px  rgb(16, 223, 238);
                transform: rotate(-15deg);
                filter: grayscale(50%);
            }
            33% { box-shadow: 1px 1px 40px  rgb(41, 201, 26); }
            66% { box-shadow: 1px 1px 40px  rgb(26, 43, 201); }
            99% { box-shadow: 4px 4px 10px  rgb(30, 50, 104); }
        }
    
    ` : ''}
`;

const Paragraph = styled.p`
    line-height: 1.6;
    text-align: center;
    color: ${props => props.color ? props.color : ''};
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    display: flex;
    justify-content: center;
    
    @media(max-width: 350px) {
        display: ${props => props.build ? 'block' : 'flex'};
        justify-content: ${props => props.build ? 'none' : 'center'};
        align-items: ${props => props.build ? 'none' : 'center'};
    }
`;

const Field = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Header = styled.div`

`;

const Table = styled.table`
    margin: 30px;
    border: 1px solid white;
    border-radius: 10px;
    background: linear-gradient(230deg, black, #0A210C, #0F2E0F);
    width: 40vw;
    min-height: 50vh;
    box-sizing: border-box;
    box-shadow: -3px 7px 10px #1B731C, -1px 3px 1px #38B33A, 2px -4px 4px #1F85B8;

    background-size: 400% 400%;
    animation: gradient 5s ease-in infinite;

    a {
        color: #fff;
    }

    @keyframes gradient {
        0% { background-position: 0% 50%; }
        33% { background-position: 50% 100%; }
        66% { background-position: 100% 50%; }
        99% { background-position: 50% 0%; }
    }
`;

const TableData = styled.td`
    text-align: center;
    color: rgb(250, 250, 250);
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};


    a {
        text-decoration-line: none;
        color: rgb(250, 250, 250);

        &:hover {
            transition: 1s;
            color: rgba(56, 179, 58, 0.8);
        }
    }
`;

const TableLabel = styled.td`
    min-width: 25%;
    text-align: center;
    color: #DCF1DD;
    font-weight: bold;
    font-size: 1.25rem;
    text-shadow: 1px -1px 1px rgba(56, 179, 58, 0.8);
`;

const LottieAnim = styled.div`
    width: 50vw;
`;

const MainComponent = props => {

    const [isStyle, setIsStyle] = useState(false);
    const [data, setData] = useState([]);

    const changeStyle = () => setIsStyle(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }

    useEffect(() => {
        axios.get('https://api.github.com/users/paulopkl/repos').then((response) => {
            // console.log(response.data);
            setData(response.data);
        })
    }, []);

    return (
        <Main>
            <Article>
                <Datas>
                    <Title small>
                        {props.language === 'English' 
                            ? <>Welcome to my Portfólio</> 
                            : <>Bem-vindo ao meu portfólio</>}
                    </Title>
                    <Paragraph>
                        {props.language === 'English'
                            ? <>SPA made with ReactJS and stylized with Styled-Components.</>
                            : <>SPA feito com ReactJS e estilizado com Styled-Components.</>}
                    </Paragraph>
                    <hr/>
                    <Paragraph>
                        {props.language === 'English' 
                        ? <>This portfolio will connect to a GitHub REST API, where you will be asked for the
                        information from the repositories and link to the projects respectively. The majority of
                        projects that will be listed here were made without a framework or with ReactJs</> 
                        : <>Este portfólio irá se conectar a uma REST API do GitHub, onde será requisitado as 
                        informações dos repositórios e link dos projetos respectivamente. A maioria dos 
                        projetos que serão listados aqui foram feitos sem framework ou com ReactJs</>}
                    </Paragraph>
                    <Paragraph>
                        {props.language === 'English' 
                        ? <>Recently I have been studying and practicing on projects with ReactJS + Redux to create
                        interfaces or features, and Node.js for the back end.</> 
                        : <>Recentemente venho estudando e praticando em projetos com ReactJS + Redux para criar 
                        interfaces ou features, e Node.js para o back-end.</>}
                    </Paragraph>
                    <Paragraph>           
                        {props.language === 'English' 
                        ? <>In server-side development, I really enjoy using node.js and its frameworks like 
                        express.js, nodemon and sequilize (ORM - integrates the database).</> 
                        : <>No desenvolvimento do lado do servidor, gosto muito de utilizar o node.js e seus 
                        frameworks como express.js, nodemon e sequilize (ORM - integra o banco de dados).</>}  
                    </Paragraph>
                    <Paragraph>
                        {props.language === 'English' 
                        ? <>My favorite bank is without a doubt MongoDB, but I have no restrictions on using
                        MySQL just finds it easier in a web application to store data in JSON even though
                        sometimes the NoSQL bank is at a disadvantage.</> 
                        : <>Meu banco preferido é sem duvidas o MongoDB, mas não tenho restrições para usar o 
                        MySQL apenas acho mais fácil em uma aplicação web armazenar dados em JSON mesmo que
                        em algumas ocasiões o banco NoSQL estejam em desvantagem.</>}
                    </Paragraph>
                </Datas>
                <ProgImage src={Programmer} isStyle={isStyle} alt="Programmer" onMouseEnter={changeStyle} />
            </Article>
            <Section>
                <a href="https://github.com/paulopkl" target="_blank" rel="noopener noreferrer">
                    <Title color="white" under>
                    {props.language === 'English' ? <>GitHub Projects</> : <>Projetos Github</>}
                    </Title>
                </a>
                <Paragraph color="white" fontSize={'1.25rem'} build>
                    {props.language === 'English' ? <>Under Construction</> : <>Em construção (Building)</> }
                    <AiFillTool size={40} />
                </Paragraph>
                <Field>
                    <Header></Header>
                        {data.map((item, index) => (
                            <Table key={index}>
                                <thead>
                                    <tr>
                                        <TableLabel>Nome:</TableLabel>
                                        <TableData fontSize="1.5rem">{item.name}</TableData>
                                    </tr>
                                    <tr>
                                        <TableLabel>Descrição:</TableLabel>
                                        <TableData>{item.description}</TableData>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <TableLabel>URL:</TableLabel>
                                        <TableData>
                                            <a 
                                                href={item.clone_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer">
                                                    {item.clone_url}
                                            </a>
                                        </TableData>
                                    </tr>
                                </tfoot>
                            </Table>
                        ))}
                    <LottieAnim>
                        <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
                    </LottieAnim>
                </Field>
            </Section>
        </Main>
    );
}

const mapStateToProps = state => ({ language: state.language.language });

const mainComponent = connect(mapStateToProps)(MainComponent);

export default mainComponent;