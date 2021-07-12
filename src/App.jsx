import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './layouts/Home';
import Descr from './components/description/Descr';
import Basket from './components/basket/Basket';
import ProtectedRoute from './components/ProtectedRoutes';
import Registration from './components/registration/Registration';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') ? true : false);

  const handleLogin = () => {
    setUser(true);
  };

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/home"
          render={(props) => (
            <Home
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/description"
          render={() => (
            <Descr handleLogin={handleLogin} handleLogout={handleLogout}/>
          )}
        />
        <Route path="/registration" component={Registration}/>
        <ProtectedRoute
          path="/basket"
          user={user}
          component={Basket}
          handleLogout={handleLogout}
        />
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  );
};

export default App;
