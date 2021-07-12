import React from 'react';
import { Cards } from '../../components/cards/Cards';

import heart from '../../img/heart.png';
import './Main.sass';

const Main = ({ cards }) => {
  return (
    <div className="Main">
      <h1 className="Main-head">
        I <img src={heart} alt="heart" /> ICE CREAM
      </h1>
      <Cards cards={cards} />
    </div>
  );
};

export default Main;
