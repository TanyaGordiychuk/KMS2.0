import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import Header from '../Header';

import { database } from '../../constants/backend-urls';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    axios.get(`${database}/${userId}`)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header />
        <div className="account">
          <div className="account__photo clear">
            <img
              src={user.photo}
              alt={user.name}
            />
          </div>
          <div>
            <TextField
              value={user.name}
              floatingLabelText="Name"
            />
            <TextField
              value={user.spec}
              floatingLabelText="Specialisation"
            />
            <TextField
              value={user.experience}
              floatingLabelText="Experience"
            />
            <TextField
              value={user.english}
              floatingLabelText="English level"
            />
            <TextField
              value={user.b_day}
              floatingLabelText="Day of birth"
            />
          </div>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = userId => userId;

export default connect(mapStateToProps)(Account);
