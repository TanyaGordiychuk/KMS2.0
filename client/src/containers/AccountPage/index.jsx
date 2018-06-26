import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Account from '../../components/Account';

const AccountPage = ({ userId }) => (
  <div>
    <Header />
    <Account userId={userId} />
  </div>
);

AccountPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = userId => userId;

export default connect(mapStateToProps)(AccountPage);
