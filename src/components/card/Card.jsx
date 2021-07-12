import React from 'react';
import { useHistory } from 'react-router-dom';

import imgIce from '../../img/ice-cream.png';
import './Card.sass';

export const Card = (props) => {
  const { id, url, info, price } = props;
  const history = useHistory();

  const handleCard = () => {
    history.push('/description');
  };

  return (
    <div className="Card" onClick={() => handleCard()}>
      <div className="img-block">
        <img src={url ? url : imgIce} alt="no" />
      </div>
      <div className="information">
        <p className="information_text">
          {info ? info : 'Snow Tender Ice Cream'}
        </p>
        <p className="price">{price ? price : '$243.00'}</p>
      </div>
    </div>
  );
};
