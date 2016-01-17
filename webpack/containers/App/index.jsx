'use strict';

import React from 'react';

import Header from '../../components/Header';
import Main from '../Main';
import Footer from '../../components/Footer';

import './style.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.stateChanged = this.stateChanged.bind(this);
  }
  stateChanged() {

  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header/>
        <Main children={children}></Main>
        <Footer/>
      </div>
    );
  }
}

export default App;
