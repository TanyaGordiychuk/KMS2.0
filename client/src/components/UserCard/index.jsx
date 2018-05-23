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
        <div className="user-card__name"> { user.name }
        </div>
        <div>
          <div className="user__photo">
            <img src={user.photo} alt={user.name} />
          </div>
          <div className="user__info clear">
            <p className="user__info__spec"> { user.spec }</p>
            <p>Experience: { user.experience } years</p>
            <p>English: { user.english }</p>
          </div>
        </div>
        <div className="user-skills">
          <p className="user-skills__title"> Professional skills: </p>
          { user.skills.map(skill => (
            <p
              key={skill.skill_name}
              className="user-skills__level"
            > { skill.skill_name } :
              <span className="clear"> { skill.level } /10</span>
            </p>))}
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
