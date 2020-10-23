import React from 'react';

import styled from 'styled-components';

import { 
    SiPhp, 
    SiNextDotJs, 
    SiRedux, 
    SiWebpack, 
    SiMongodb, 
    SiMysql, 
    SiStyledComponents,
    SiMaterialUi,
    SiJquery,
    SiJavascript,
    SiBootstrap,
    SiTypescript,
    SiExpo
} from 'react-icons/si';
import { FaWordpress, FaNode, FaServer, FaGulp, FaReact, FaAngular, FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { AiTwotoneApi } from 'react-icons/ai';
import { DiSass, DiMaterializecss } from 'react-icons/di';

const ListSkills = styled.ul`

    margin: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-basis: 50%;
    padding: 0;

    li {
        list-style: none;
        margin: 1rem;
    }
    
    @media(max-width: 640px) {
        li {
            list-style: none;
            margin: 1.25rem 0.2rem 0.9rem 0.2rem ;
        }
    }

`;

const Tec = styled.li`

    display: flex;
    width: 140px;
    flex-direction: column;
    align-items: center;

    @media(max-width: 470px) {
        width: 90px;
    }

`;

const Html = styled(FaHtml5)` margin-bottom: 10px; `;
const Css = styled(IoLogoCss3)` margin-bottom: 10px; `;
const Php = styled(SiPhp)` margin-bottom: 10px; `;
const Js = styled(SiJavascript)` margin-bottom: 10px; `;
const Word = styled(FaWordpress)` margin-bottom: 10px; `;
const Jquery = styled(SiJquery)` margin-bottom: 10px; `;
const Boots = styled(SiBootstrap)` margin-bottom: 10px; `;
const Sass = styled(DiSass)` margin-bottom: 10px; `;
const MatCss = styled(DiMaterializecss)` margin-bottom: 10px; `;
const MatUi = styled(SiMaterialUi)` margin-bottom: 10px; `;
const Node = styled(FaNode)` margin-bottom: 10px; `;
const Server = styled(FaServer)` margin-bottom: 10px; `;
const Mysql = styled(SiMysql)` margin-bottom: 10px; `;
const Mongo = styled(SiMongodb)` margin-bottom: 10px; `;
const Gulp = styled(FaGulp)` margin-bottom: 10px; `;
const Webpack = styled(SiWebpack)` margin-bottom: 10px; `;
const ReactIcon = styled(FaReact)` margin-bottom: 10px; `;
const Redux = styled(SiRedux)` margin-bottom: 10px; `;
const StyledComps = styled(SiStyledComponents)` margin-bottom: 10px; `;
const Nextjs = styled(SiNextDotJs)` margin-bottom: 10px; `;
const Angular = styled(FaAngular)` margin-bottom: 10px; `;
const API = styled(AiTwotoneApi)` margin-bottom: 10px; `;
const TypeScript = styled(SiTypescript)` margin-bottom: 10px; `;
const Expo = styled(SiExpo)` margin-bottom: 10px; `;

const Skills = () => {
    return (
        <ListSkills>
            <Tec>
                <Html size="30" />
                HTML
            </Tec>
            <Tec>
                <Css size="30" />
                CSS
            </Tec>
            <Tec>
                <Php size="30" />
                PHP
            </Tec>
            <Tec>
                <Js size="30" />
                JavaScript
            </Tec>
            <Tec>
                <TypeScript size="30" />
                TypeScript
            </Tec>
            <Tec>
                <ReactIcon size="30" />
                React
            </Tec>
            <Tec>
                <ReactIcon size="30" />
                React-Native
            </Tec>
            <Tec>
                <Expo size="30" />
                Expo
            </Tec>
            <Tec>
                <Redux size="30" />
                Redux
            </Tec>
            <Tec>
                <StyledComps size="30" />
                Styled-Components
            </Tec>
            <Tec>
                <Nextjs size="30" />
                NextJS
            </Tec>
            <Tec>
                <Node size="30" />
                Node.js
            </Tec>
            <Tec>
                <Word size="30" />
                Wordpress
            </Tec>
            <Tec>
                <Jquery size="30" />
                Jquery
            </Tec>
            <Tec>
                <API size="30" />
                API RESTfull
            </Tec>
            <Tec>
                <Server size="30" />
                express.js
            </Tec>
            <Tec>
                <Mysql size="30" />
                MySQL
            </Tec>
            <Tec>
                <Mongo size="30" />
                MongoDB
            </Tec>
            <Tec>
                <Gulp size="30" />
                Gulp
            </Tec>
            <Tec>
                <Webpack size="30" />
                Webpack
            </Tec>
            <Tec>
                <Boots size="30" />
                Bootstrap
            </Tec>
            <Tec>
                <Sass size="30" />
                Sass
            </Tec>
            <Tec>
                <MatUi size="30" />
                Material-Ui
            </Tec>
            <Tec>
                <MatCss size="30" />
                Materialize-css
            </Tec>
            <Tec>
                <Angular size="30" />
                Angular 9
            </Tec>
         </ListSkills>
    );
}

export default Skills;