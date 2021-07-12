import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, CircularProgress } from '@material-ui/core';

import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header/Header';

import iceCreamBig from '../../img/ice-cream-big.png';
import basket from '../../img/white-basket.svg';
import successImg from '../../img/success.svg';
import './Descr.sass';

const Descr = (props) => {
  const { url, scu, name, text, price } = props;
  const [count, setCount] = useState(0);
  const [buy, setBuy] = useState(
    +localStorage.getItem('cart') ? +localStorage.getItem('cart') : 0
  );
  const [addCart, setAddCart] = useState(false);
  const [success, setSuccess] = useState(false);
  let products = localStorage.getItem('prods')
    ? localStorage.getItem('prods')
    : [];

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };

  const handleAddCard = () => {
    products.push({
      name: 'Snow Tender Ice Cream',
      price: '$243.00',
      count: count,
    });
    console.log(products);
    setBuy((prev) => prev + count);
    localStorage.setItem('cart', buy);
    if (count > 0) {
      setAddCart(true);
      setTimeout(() => {
        setAddCart(false);
      }, 2000);

      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
      }, 2000);
    }
  };

  return (
    <div className="Descr">
      <Header
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <div className="Descr-block">
        <Container>
          <Link to="/home" className="main-link">
            Main page /
          </Link>{' '}
          <span className="product-link">Product card</span>
          <div className="Descr-main">
            <div className="Descr-img">
              <img src={url ? url : iceCreamBig} alt="ice cream" />
            </div>
            <div className="Descr-info">
              <h5>{scu ? scu : 'SKU: BXD100BLK'}</h5>
              <h2>{name ? name : 'Snow Tender Ice Cream'}</h2>
              <span className="Descr-info_description">Description:</span>
              <div className="Descr-info_text">
                <p className="Descr-info_text">
                  {text
                    ? text
                    : `Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%. Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.`}
                </p>
              </div>
              <div className="count">
                <span className="count_price">{price ? price : '$243.00'}</span>
                <div className="count-num">
                  <button className="btn-minus" onClick={() => handleMinus()}>
                    -
                  </button>
                  <span className="count-main">{count}</span>
                  <button className="btn-minus" onClick={() => handlePlus()}>
                    +
                  </button>
                </div>
              </div>
              {!addCart ? (
                <div className="success">
                  <button className="add-card" onClick={() => handleAddCard()}>
                    <img src={basket} alt="basket" className="add-card_img" />{' '}
                    Add to cart
                  </button>
                  {success && (
                    <span>
                      <img src={successImg} alt="success" />
                      Added to cart
                    </span>
                  )}
                </div>
              ) : (
                <button className="add-card" onClick={() => handleAddCard()}>
                  <CircularProgress color="white" />
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Descr;
