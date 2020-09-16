import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateProvider } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';
const promise = loadStripe("pk_test_51HRZ07EI8wtVd8GUmB7faEZLi1mpG6AUJA9PjYpej8PySRNUgvE65eNnmJez834DuAclwnzmtDVFNeq2DxOkNDOR00TfW56Zv5")


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

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
