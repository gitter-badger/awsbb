'use strict';

import React from 'react';
import { Button, Input } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'redux-simple-router';
import FontAwesome from 'react-fontawesome';

import { Validators } from '../../common';

import './style.css';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.stateChanged = this.stateChanged.bind(this);
    this.resolveStyleFromState = this.resolveStyleFromState.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  stateChanged() {

  }
  componentWillMount() {
    this.setState({
      email: '',
      password: ''
    });
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    const { push } = this.props;
    let envelope = <FontAwesome name="envelope" fixedWidth/>;
    let lock = <FontAwesome name="lock" fixedWidth/>;
    return (
      <section id="login">
        <form className="form-horizontal">
          <Input
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            label="Email Address:"
            help="Validation is based on a simple regex."
            bsStyle={this.resolveStyleFromState('email')}
            hasFeedback
            name="email"
            ref="email"
            labelClassName="col-xs-2"
            onChange={this.handleOnChange}
            addonBefore={envelope}
            wrapperClassName="col-xs-10"/>
          <Input
            type="password"
            value={this.state.password}
            placeholder="Password"
            label="Password:"
            help="Validation is based on string length."
            bsStyle={this.resolveStyleFromState('password')}
            hasFeedback
            name="password"
            ref="password"
            labelClassName="col-xs-2"
            onChange={this.handleOnChange}
            addonBefore={lock}
            wrapperClassName="col-xs-10"/>
          <div className="form-group">
            <div className="col-xs-offset-2 col-xs-10">
              <Link to="/lostPassword">Click here to recover your password.</Link>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-offset-2 col-xs-10">
              <Button
                bsStyle="success"
                onClick={this.handleSubmit}
                disabled={this.canSubmit()}>
                ★　LOGIN　★
              </Button>
            </div>
          </div>
        </form>
      </section>
    );
  }
  resolveStyleFromState(type) {
    switch (type) {
      case 'email':
        return Validators.getEmailValidationClass(this.state.email);
      case 'password':
        return Validators.getPasswordValidationClass(this.state.password);
      default:
        return '';
    }
  }
  handleOnChange(e) {
    let state = {};
    let key = e.target.name;
    if(this.refs[key]) {
      state[key] = this.refs[key].getValue();
      this.setState(state);
    }
  }
  handleSubmit() {
    let email = this.refs.email.getValue();
    let password = this.refs.password.getValue();
    console.log('email:', email);
    console.log('password:', password);
  }
  canSubmit() {
    try {
      let email = this.refs.email.getValue();
      let password = this.refs.password.getValue();
      let validState = Validators.isValidEmail(email) && Validators.isValidPassword(password);
      return !validState;
    } catch (e) {
      return true;
    }
  }
}

export default connect(null, {
  push: routeActions.push
})(Login);
