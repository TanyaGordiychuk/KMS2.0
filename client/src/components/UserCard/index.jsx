import React from 'react';
import { PropTypes } from 'prop-types';

// const renderProfInfo = (user) => {
//
// }

const UserCard = ({ userArr, close }) => (
  <div className="user-card_wrapper">
    { userArr.map(user => (
      <div
        data-user-id={user._id}
        key={user._id}
        className="user-card"
      >
        <div className="user-card__name"> { user.name } </div>
        <div className="user-card__photo">
          <img src={user.photo} alt={user.name} />
        </div>
        <p className="user-card__spec"> { user.spec } </p>
        <div className="user-card__info">
          <p>Experience: { user.experience } years</p>
          <p>English: { user.english }</p>
          <div className="user-card-skills">
            <p className="user-card-skills__title"> Professional skills: </p>
            { user.skills.map(skill => (
              <p
                key={skill.skill_name}
                className="user-card-skills__level"
              > { skill.skill_name } :
                <span className="clear"> { skill.level } /10</span>
              </p>))}
          </div>
        </div>
      </div>
    ))}
    <button onClick={close}>
      Close
    </button>
  </div>
);

UserCard.propTypes = {
  userArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  close: PropTypes.func.isRequired,
};

export default UserCard;
