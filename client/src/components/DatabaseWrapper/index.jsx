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
      userArr: [],
    };
  }

  getUserById = (id) => {
    axios.get(`${database}/${id}`)
      .then((res) => {
        const userArr = [];
        userArr.push(res.data);
        this.setState({ userArr });
      });
  };

  showUserCard = (e) => {
    const { userId } = e.currentTarget.dataset;
    if (userId) {
      this.getUserById(userId);
      this.setState({
        isReviewUser: true,
      });
    } else {
      this.setState({
        isReviewUser: false,
      });
    }
    return null;
  };

  closeUserCard = () => {
    this.setState({
      isReviewUser: false,
    });
  };

  render() {
    const { userArr, isReviewUser } = this.state;

    return (
      <div>
        <Database onClick={this.showUserCard} />
        { isReviewUser ?
          <UserCard userArr={userArr} close={this.closeUserCard} />
          :
          null
        }
      </div>
    );
  }
}

export default DatabaseWrapper;
