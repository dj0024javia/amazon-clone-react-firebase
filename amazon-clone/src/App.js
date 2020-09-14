import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateProvider } from './StateProvider';
function App() {

  const [{ }, dispatch] = useStateProvider()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("AuthUser is :", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
        {/* Header */}

        <Switch>

          <Route path="/loginpage">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />

            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
