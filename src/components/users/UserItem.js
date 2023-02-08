import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        src={avatar_url}
        alt={login}
        style={{ width: '60px' }}
      />
      <h3 className='card-title text-center'>{login}</h3>
      <a className='btn btn-dark btn-sm my-1' href={html_url}>
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
