'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';

import { DataActions } from '../../actions';

import './style.css';

class Verify extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { push, dataActions, location } = this.props;
    let email = location.query.email;
    let verify = location.query.verify;
    setTimeout(() => {
      dataActions.postData('http://127.0.0.1:3000/api/AuthVerifyUser', {
        email,
        verify
      })
      .then(() => push('/thanks?type=VerifyUser'))
      .catch(() => {});
    }, 1000);
  }
  render() {
    return (
      <section id="verify">
        <div className="container">
          <p>
            Verifying your token...
          </p>
        </div>
      </section>
    );
  }
}

Verify.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(routeActions.push, dispatch),
    dataActions: bindActionCreators(DataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
