import React, { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from "./Footer/Footer";

const Home = (props) => {
  const cards = [
    {
      id: 2523353,
      text: 'Snow Tender Ice Cream',
      price: '$410.00',
    },
    {
      id: 2523245,
      text: 'Snow Tender Ice Cream',
      price: '$391.00',
    },
    {
      id: 2587656,
      text: 'Snow Tender Ice Cream',
      price: '$501.00',
    },
    {
      id: 5466587,
      text: 'Snow Tender Ice Cream',
      price: '$726.00',
    },
    {
      id: 3546765,
      text: 'Snow Tender Ice Cream',
      price: '$111.00',
    },
    {
      id: 8796753,
      text: 'Snow Tender Ice Cream',
      price: '$243.00',
    },
  ];

  return (
    <div className="App">
      <Header
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
      <Main cards={cards} />
      <Footer />
    </div>
  );
};

export default Home;
