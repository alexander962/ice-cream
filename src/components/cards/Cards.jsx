import React from 'react';
import { Container } from '@material-ui/core';

import { Card } from '../card/Card';
import './Cards.sass';

export const Cards = ({ cards }) => (
  <div className="Cards">
    <Container className="container" fixed>
      {cards.map((item) => {
        const { id, url, info, price } = item;
        return <Card key={id} id={id} url={url} info={info} price={price} />;
      })}
    </Container>
  </div>
);
