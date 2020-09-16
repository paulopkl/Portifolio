import React from 'react';
import CardHeader from '../components/cardHeader/CardHeader';
import CardBody from '../components/cardBody/CardBody';
import CardFooter from '../components/cardFooter/CardFooter';

import styled from 'styled-components';

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

    @media(max-width: 900px) {
        width: 90%;
    }

`;

const Main =  styled.main`

      margin: 0;
      padding-top: 0.8rem;
      background: linear-gradient(135deg, rgb(80, 150, 255),rgb(40, 96, 179), rgb(12, 49, 94), rgb(0, 15, 58));
      padding-bottom: 4rem;

`;

const MainComponent = () => {
    return (
        <Main>
            <Card>
                <CardHeader />
                <CardBody />
                <CardFooter />
            </Card>
        </Main>
    );
}

export default MainComponent;