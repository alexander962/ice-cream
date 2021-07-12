import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Registration from '../../components/registration/Registration';
import Autorization from '../../components/autorization/Autorization';

import logo from '../../img/logoM.png';
import logoText from '../../img/logo-text.png';
import profile from '../../img/profile.svg';
import basket from '../../img/basket.svg';
import burgerImg from '../../img/menu.svg';
import './Header.sass';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const Header = (props) => {
  const [width, height] = useWindowSize();
  const [burger, setBurger] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [autorization, setAutorization] = useState(false);
  const [user, setUser] = useState(
    localStorage.getItem('user') ? localStorage.getItem('user') : ''
  );
  const history = useHistory();

  useEffect(() => {
    if (width < 400) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }, [width]);

  const handleMenu = () => {
    setDropMenu(!dropMenu);
  };

  const onDeleteUser = () => {
    props.handleLogout();
    localStorage.removeItem('user');
    setUser('');
  };

  const onClickCart = () => {
    history.push('/basket');
  };

  const onClickReg = () => {
    setRegistration(true);
    history.push('/registration');
  };

  return (
    <div className="Header">
      <Container fixed className="container">
        {dropMenu && (
          <div className="drop-down-menu">
            {user ? (
              <span className="Header-profile_text">
                <span>{user}</span>
                <span onClick={() => onDeleteUser()} className="outBtn">
                  Выход
                </span>
              </span>
            ) : (
              <span className="Header-profile_text">
                <span
                  className="Header-profile_sign-up"
                  onClick={() => onClickReg()}
                >
                  Sign up
                </span>{' '}
                /{' '}
                <span
                  className="Header-profile_sign-in"
                  onClick={() => setAutorization(true)}
                >
                  Sign in
                </span>
              </span>
            )}
            <div className="basket">
              {localStorage.getItem('cart') ? (
                <p className="basket_buy">{localStorage.getItem('cart')}</p>
              ) : null}
              <img src={basket} alt="basket" />
              <span className="Header-profile_card">Cart</span>
            </div>
          </div>
        )}

        <div className="Header-logo">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" className="Header-logo_text" />
        </div>

        {burger ? (
          <img
            src={burgerImg}
            alt="burger"
            className="burger-img"
            onClick={() => handleMenu()}
          />
        ) : (
          <div className="Header-profile">
            <img
              src={profile}
              alt="profile"
              className="Header-profile_img-prof"
            />

            {user ? (
              <span className="Header-profile_text">
                <span>{user}</span>
                <span onClick={() => onDeleteUser()} className="outBtn">
                  Выход
                </span>
              </span>
            ) : (
              <span className="Header-profile_text">
                <span
                  className="Header-profile_sign-up"
                  onClick={() => setRegistration(true)}
                >
                  Sign up
                </span>{' '}
                /{' '}
                <span
                  className="Header-profile_sign-in"
                  onClick={() => setAutorization(true)}
                >
                  Sign in
                </span>
              </span>
            )}

            <div className="basket">
              {localStorage.getItem('cart') ? (
                <p className="basket_buy">{localStorage.getItem('cart')}</p>
              ) : null}
              <img src={basket} alt="basket" onClick={() => onClickCart()} />
            </div>
            <span className="Header-profile_card" onClick={() => onClickCart()}>
              Cart
            </span>
          </div>
        )}
      </Container>
      {Registration && (
        <Registration
          registration={registration}
          setRegistration={setRegistration}
          setAutorization={setAutorization}
          setUser={setUser}
          handleLogin={props.handleLogin}
        />
      )}

      {Autorization && (
        <Autorization
          autorization={autorization}
          setAutorization={setAutorization}
          setRegistration={setRegistration}
        />
      )}
    </div>
  );
};

export default Header;
