import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

class User extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Loader/>
        <Header/>
        <section id="main">
          {children}
        </section>
        <Footer/>
      </div>
    );
  }
}

User.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { session } = state;
  const { isAuthenticated } = session;
  return {
    isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
