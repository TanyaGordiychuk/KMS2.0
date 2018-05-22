import React from 'react';
import { PropTypes } from 'prop-types';

const UserCard = ({ user, close }) => (
  <div>
    {user}
    <button onClick={close}>
      Close
    </button>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  close: PropTypes.func.isRequired,
};

export default UserCard;
