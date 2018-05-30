import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  editSkills = () => {
    this.setState({
      editMode: true,
    });
  };

  renderPersonal = user => (
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

  renderSkills = skills => (
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
        onClick={this.editSkills}
      />
    </div>
  );

  renderEditSkills = skills => (
    <div>
      {skills.map(skill => (
        <div>
          <TextField
            key={skill.skill_name}
            className="account-skills__name"
            name="skill-name"
            defaultValue={skill.skill_name}
          />
          <span className="clear"> { skill.level }/10</span>
        </div>
      ))}
      <div>
        <TextField floatingLabelText="Skill" />
        <TextField
          type="number"
          floatingLabelText="Level"
          min="0"
          max="10"
          step="0.5"
        />
        <RaisedButton
          label="Add skill"
        />
        <RaisedButton label="Save" />
      </div>
    </div>
  );

  render() {
    const { userArr } = this.props;
    const { editMode } = this.state;
    return (
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
                  {this.renderPersonal(user)}
                </Tab>
                <Tab label="Skills">
                  { editMode ?
                    this.renderEditSkills(user.skills)
                    :
                    this.renderSkills(user.skills)
                  }
                </Tab>
              </Tabs>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
Account.propTypes = {
  userArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // editUser: PropTypes.func.isRequired,
};

export default Account;
