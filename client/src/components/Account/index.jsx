import React from 'react';
import { PropTypes } from 'prop-types';

import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

const renderPersonal = user => (
  <div className="account__personal">
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
);

const renderSkills = skills => (
  <div>
    {skills.map(skill => (
      <p
        key={skill.skill_name}
        className="account-skills__name"
        name="skill-name"
      > { skill.skill_name }:
        <span className="clear"> { skill.level }/10</span>
      </p>
    ))}
    <RaisedButton
      label="Edit"
      // onClick={editUser}
    />
  </div>
);

const Account = ({ userArr }) => (
  <div className="account clear">
    { userArr.map(user => (
      <div key={user._id}>
        <div className="account__photo clear">
          <img
            src={user.photo}
            alt={user.name}
          />
        </div>
        <div className="account__info clear">
          <Tabs contentContainerClassName="account__info-container">
            <Tab label="Personal">
              {renderPersonal(user)}
            </Tab>
            <Tab label="Skills">
              {renderSkills(user.skills)}
            </Tab>
          </Tabs>
        </div>
      </div>
    ))}
  </div>
);

Account.propTypes = {
  userArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // editUser: PropTypes.func.isRequired,
};

export default Account;
