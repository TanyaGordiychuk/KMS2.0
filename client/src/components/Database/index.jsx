import React, { PureComponent } from 'react';
import axios from 'axios';

import { database } from '../../constants/backend-urls';

class Database extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    axios.get(database)
      .then((res) => {
        const employees = res.data;
        this.setState({ employees });
      });
  }

  render() {
    return (
      <main>
        <div className="content_wrapper">
          { this.state.employees.map(employee => (
            <div key={employee._id} className="user">
              <div className="user__name"> { employee.name }
              </div>
              <div>
                <div className="user__photo">
                  <img src={employee.photo} alt={employee.name} />
                </div>
                <div className="user__info clear">
                  <p className="user__info__spec"> { employee.spec }</p>
                  <p>Experience: { employee.experience } years</p>
                  <p>English: { employee.english }</p>
                </div>
              </div>
              <div className="user-skills">
                <p className="user-skills__title"> Professional skills: </p>
                { employee.skills.map(skill => (
                  <p
                    key={skill.skill_name}
                    className="user-skills__level"
                  > { skill.skill_name } :
                    <span className="clear"> { skill.level } /10</span>
                  </p>))}
              </div>
            </div>))}
        </div>
      </main>
    );
  }
}

export default Database;
