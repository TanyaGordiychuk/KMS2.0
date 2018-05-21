import React, { PureComponent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import actionTypes from '../../constants/action-types';
import load from '../../actions/load';
import { kdb } from '../../constants/route-urls';
import { loginUrl } from '../../constants/backend-urls';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: '',
      password: '',
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  getUser = (email) => {
    axios.get(`${loginUrl}/${email}`)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      })
      .catch(this.setState({
        user: '',
      }));
  };

  setUser = () => {
    const { dispatch, history } = this.props;

    const data = {
      user_id: this.state.user.user_id,
      status: this.state.user.status,
    };

    dispatch(load(actionTypes.SET_USER, data));
    history.push(kdb);
  };

  checkUser = (e) => {
    e.preventDefault();
    this.getUser(this.state.email);
    if (this.state.user !== null) {
      if (
        this.state.email === this.state.user.login &&
        this.state.password === this.state.user.pass) {
        this.setUser();
      }
    }
  };

  render() {
    return (
      <div className="login">
        <div className="login__title">
          KMS
        </div>
        <form
          className="login-form"
          onChange={this.onChange}
        >
          { this.state.user === '' ?
            <span className="field-error">
                  No such user
            </span> :
            null
          }
          <TextField
            className="login-form__email"
            name="email"
            hintText="Email"
          />
          <TextField
            className="login-form__password"
            type="password"
            name="password"
            hintText="Password"
          />
          <RaisedButton
            className="login-form__button"
            label="LOGIN"
            primary
            onClick={this.checkUser}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
