import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import iceCreamMini from '../../img/ice-cream-mini.png';
import deleteImg from '../../img/delete.svg';
import './Basket.sass';

const Basket = (props) => {
  const prods = [
    {
      text: 'Snow Tender Ice Cream',
      pcs: 1,
      price: 243,
    },
    {
      text: 'Snow Tender Ice Cream',
      pcs: 1,
      price: 243,
    },
    {
      text: 'Snow Tender Ice Cream',
      pcs: 1,
      price: 243,
    },
  ];

  localStorage.setItem('products', JSON.stringify(prods));

  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem('products')).reduce((total, item) => {
      console.log(total + ' ' + item.price);
      return total + item.price;
    }, 0)
  );
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products'))
  );

  const onDeleteProd = (index) => {
    let arr = JSON.parse(localStorage.getItem('products'));
    delete arr[index];
    arr = arr.filter((val) => val);
    localStorage.setItem('products', JSON.stringify(arr));
    setResult(
      JSON.parse(localStorage.getItem('products')).reduce((total, item) => {
        console.log(total + ' ' + item.price);
        return total + item.price;
      }, 0)
    );
    setProducts(JSON.parse(localStorage.getItem('products')));
  };

  return (
    <div className="Basket">
      <Header handleLogout={props.handleLogout} />
      <div className="Basket-block">
        <Container>
          <Link to="/home" className="main-link">
            Main page /
          </Link>{' '}
          <span className="product-link">Basket</span>
          <h2 className="Basket-head">Basket</h2>
          <div className="Basket-main">
            <div className="Basket-main_products">
              {products.map((item, index) => (
                <div className="Basket-card" key={`${index}prod`}>
                  <div className="Basket-card_main">
                    <div className="Basket-card_img">
                      <img
                        src={item.url ? item.url : iceCreamMini}
                        alt="ice cream"
                      />
                    </div>
                    <div className="Basket-card_main-text">
                      <p>{item.text ? item.text : 'Snow Tender Ice Cream'}</p>
                      <p className="pcs">
                        {`${item.pcs} pcs.` ? `${item.pcs} pcs.` : '1 pcs.'}
                      </p>
                    </div>
                  </div>

                  <div className="Basket-card_price">
                    <span className="Basket-card_price-text">
                      {item.price ? `$${item.price}` : '$243.00'}
                    </span>
                    <img
                      src={deleteImg}
                      alt="delete"
                      onClick={() => onDeleteProd(index)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="Basket-main_costs">
              <div className="subTotal-block">
                <span className="subTotal-block_text">Sub total:</span>
                <span className="subTotal-block_price">{`$${result}`}</span>
              </div>
              <hr />
              <button className="subTotal-block_btn">Check out</button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
