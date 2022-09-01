import React, { useState } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Cart from "./components/Cart/Cart";
import Log from "./components/Log/Log";
import Footer from "./components/Footer/Footer";
//
import MealsProvider from "./context/MealsProvider";
//
const App = () => {
  const [cartIconClickState, setCartIconClickState] = useState(false);
  const [logInClickState, setLogInClickState] = useState(false);
  //
  const clickCartIconHandler = () => {
    setLogInClickState(false);
    setCartIconClickState(true);
  };
  //
  const closeCartHandler = () => {
    setCartIconClickState(false);
  };
  //
  const logInCLickHandler = () => {
    setCartIconClickState(false);
    setLogInClickState(true);
  };
  //
  const centerContent = () => {
    if (cartIconClickState) {
      return <Cart onCloseCart={closeCartHandler} />;
    }
    if (logInClickState) {
      return <Log />;
    }
    return <LandingPage />;
  };
  //
  return (
    <MealsProvider>
      <Header
        onClickCartIcon={clickCartIconHandler}
        onClickLogInIcon={logInCLickHandler}
      />
      {centerContent()}
      {/* {cartIconClickState ? (
        <Cart onCloseCart={closeCartHandler} />
      ) : (
        <LandingPage />
      )}
      {logInClickState ? <Log /> : <LandingPage />} */}
      <Footer />
    </MealsProvider>
  );
};
export default App;
