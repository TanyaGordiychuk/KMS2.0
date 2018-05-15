import React, { PureComponent } from 'react';
import axios from 'axios';
import {
  Link,
  // withRouter
} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { kdb } from '../../constants/route-urls';
import { login } from '../../constants/backend-urls';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: '',
      password: '',
      isValid: false,
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  getUser = (email) => {
    axios.get(`${login}/${email}`)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      })
      .catch(this.setState({
        user: '',
      }));
  };

  checkUser = (e) => {
    e.preventDefault();
    this.getUser(this.state.email);
    if (this.state.user !== null) {
      if (
        this.state.email === this.state.user.login &&
        this.state.password === this.state.user.pass) {
        this.setState({
          isValid: true,
        });
      }
    }
  };

  render() {
    return (
      <form
        className="login"
        onChange={this.onChange}
        onSubmit={this.checkUser}
      >
        { this.state.user === '' ?
          <span className="field-error">
                No such user
          </span> :
          null
        }
        <TextField
          className="login__email"
          name="email"
          hintText="Email"
        />
        <TextField
          className="login__password"
          name="password"
          hintText="Password"
        />
        <RaisedButton
          className="login__submit"
          type="submit"
          label="LOGIN"
        />
        { this.state.isValid ?
          <Link href={kdb} to={kdb} >
            to DB
          </Link>
          :
          null
        }
      </form>
    );
  }
}

export default Login;
