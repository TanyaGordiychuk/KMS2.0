import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Account from '../../components/Account';

import { database } from '../../constants/backend-urls';

class AccountPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    axios.get(`${database}/${userId}`)
      .then((res) => {
        const user = [];
        user.push(res.data);
        this.setState({ user });
      });
  }

  // handleInput = e => (
  //   e.preventDefault();
  //
  // );

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header />
        <Account userArr={user} />
      </div>
    );
  }
}

AccountPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = userId => userId;

export default connect(mapStateToProps)(AccountPage);
