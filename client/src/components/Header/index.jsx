import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  kdb,
  account,
} from '../../constants/route-urls';

const Header = ({ photo, userId }) => (
  <header className="header">
    <Link
      to={kdb}
      href={kdb}
    >
      <h1 className="header__title">Knowledge Management System</h1>
    </Link>
    <Link
      to={`${account}/${userId}`}
      className="header__user"
      href={account}
    >
      <img
        className="header__user__image"
        src={photo}
        alt="user"
      />
    </Link>
  </header>
);

Header.propTypes = {
  photo: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ photo, userId }) => ({ photo, userId });

export default connect(mapStateToProps)(Header);
