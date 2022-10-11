import React, { Component } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Main from "./main/Main.jsx";
import './styles/style.scss'


class App extends Component {
  
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    );
  }
}

export default App;
