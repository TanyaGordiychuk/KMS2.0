import React, { PureComponent } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';

import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add-circle-outline';

import { database } from '../../constants/backend-urls';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      editMode: false,
      newSkills: {},
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

  onChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      newSkills: {
        ...prevState.newSkills,
        [name]: value,
      },
    }));
  };

  handleSlider = (event, value) => {
    this.setState(prevState => ({
      newSkills: {
        ...prevState.newSkills,
        level: value,
      },
    }));
  };

  editSkills = () => {
    this.setState({
      editMode: true,
    });
  };

  saveSkills = () => {
    this.setState({
      editMode: false,
    });
  };

  addSkill = () => {
    const { newSkills } = this.state;
    this.setState(prevState => ({
      user: {
        skills: {
          ...prevState.skills,
          newSkills,
        },
      },
    }));
    this.setState({
      newSkills: null,
    });
  };

  renderPersonal = user => (
    <div className="account__personal">
      {console.log(user.name) }
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
      { console.log(user.skills) }
    </div>
  );

  renderSkills = skills => (
    <div>
      {skills.map(skill => (
        <div>
          <TextField
            key={skill.skill_name}
            className="account-skills__name"
            name="skill-name"
            value={skill.skill_name}
          />
          <span className="clear"> { skill.level }/10</span>
        </div>
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
        <div
          key={skill.skill_name}
          className="skills"
        >
          <TextField
            className="account-skills__name"
            name="skill-name"
            defaultValue={skill.skill_name}
          />
          <Slider
            value={skill.level}
            min={0}
            max={10}
            step={0.5}
            className="account-skills__level"
          />
        </div>
      ))}
      <div>
        <form onChange={this.onChange}>
          <TextField
            floatingLabelText="Skill"
            name="skill-name"
          />
          <Slider
            min={0}
            max={10}
            step={0.5}
            className="account-skills__level"
            name="level"
            onChange={this.handleSlider}
          />
          <IconButton onClick={this.addSkill}>
            <Add />
          </IconButton>
        </form>
        <RaisedButton
          label="Save"
          onClick={this.saveSkills}
        />
      </div>
      {this.state.newSkills ?
        <span>Skills are</span> :
        <span>No skills</span>
      }
    </div>
  );

  render() {
    const { user, editMode } = this.state;
    return (
      <div className="account clear">
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
              {user.skills !== undefined ?
                <Tab label="Skills">
                  {editMode ?
                    this.renderEditSkills(user.skills)
                    :
                    this.renderSkills(user.skills)
                  }
                  {/* {user.skills !== undefined ? */}
                  {/* this.renderSkills(user.skills) */}
                  {/* : */}
                  {/* null */}
                  {/* } */}
                </Tab>
                :
                null
              }
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
Account.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Account;
