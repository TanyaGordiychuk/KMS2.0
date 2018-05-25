import React from 'react';
import { PropTypes } from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import Cake from 'material-ui/svg-icons/social/cake';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';

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
    <div className="user-card__info__line">
      <Cake className="user-card__img" />
      <span>{user.b_day}</span>
    </div>
    <div className="user-card__info__line">
      <Email className="user-card__img" />
      <span>{user.email}</span>
    </div>
    <div className="user-card__info__line">
      <Phone className="user-card__img" />
      <span>{user.phone}</span>
    </div>
    <div className="user-card__info__line">
      <img
        className="user-card__img"
        src="src/img/skype.png"
        alt="skype"
      />
      <span>{user.skype}</span>
    </div>
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
