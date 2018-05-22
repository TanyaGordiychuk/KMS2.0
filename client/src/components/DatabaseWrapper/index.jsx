import React, { PureComponent } from 'react';
import axios from 'axios';

// import SlideBlock from '../SlideBlock';
import Database from '../Database';
import UserCard from '../UserCard';

import { database } from '../../constants/backend-urls';

class DatabaseWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReviewUser: false,
      // isOpened: 0,
      user: {},
    };
  }

  getUserById = (id) => {
    axios.get(`${database}${id}`)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      });
  };

  showUserCard = ({ target: { dataset: { userId } } }) => {
    if (userId) {
      this.setState({
        // isReviewUser: true,
        user: this.getUserById(+userId),
        // isOpened: 1,
        isReviewUser: true,
      });
      console.log('click');
    } else {
      this.setState({
        isReviewUser: false,
        // isOpened: 0,
      });
    }
    return null;
  };

  closeUserCard = () => {
    this.setState({
      // isOpened: 0,
      isReviewUser: false,
    });
  };

  render() {
    const { user, isReviewUser } = this.state;

    return (
      <div>
        <Database onClick={this.showUserCard} />
        { isReviewUser ?
          <UserCard user={user} close={this.closeUserCard} />
          :
          null
        }
      </div>
    );
  }
}

export default DatabaseWrapper;
