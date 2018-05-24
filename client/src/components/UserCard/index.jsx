import React from 'react';
import { PropTypes } from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

const renderProfInfo = user => (
  <div>
    <p>Experience: { user.experience } years</p>
    <p>English: { user.english }</p>
    <div className="user-card-skills">
      <p className="user-card-skills__title"> Skills: </p>
      { user.skills.map(skill => (
        <p
          key={skill.skill_name}
          className="user-card-skills__level"
        > { skill.skill_name }:
          <span className="clear"> { skill.level }/10</span>
        </p>))}
    </div>
  </div>
);

const renderPersonalInfo = user => (
  <div>
    <p>B-day: {user.b_day}</p>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Skype: {user.skype}</p>
  </div>
);

const UserCard = ({ userArr, close }) => (
  <div className="user-card_wrapper">
    { userArr.map(user => (
      <div
        data-user-id={user._id}
        key={user._id}
        className="user-card"
      >
        <div className="user-card__name"> { user.name } </div>
        <div className="user-card__photo clear">
          <img src={user.photo} alt={user.name} />
        </div>
        <p className="user-card__spec"> { user.spec } </p>
        <Tabs
          className="user-card__info clear"
          contentContainerClassName="user-card__info-container"
        >
          <Tab label="Professional">
            {renderProfInfo(user)}
          </Tab>
          <Tab label="Personal">
            {renderPersonalInfo(user)}
          </Tab>
        </Tabs>
        <FlatButton
          label="Close"
          className="user-card__close"
          onClick={close}
          primary
        />
      </div>
    ))}
  </div>
);

UserCard.propTypes = {
  userArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  close: PropTypes.func.isRequired,
};

export default UserCard;
