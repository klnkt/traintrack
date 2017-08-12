import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '../../list/List';

import './ExercisesList.scss';

const ExercisesList = (props) => {
  const getItem = item => (
    <div className="List-item">
      <Link to={`/exercises/${item.id}`}>
        {item.title} {item.date}
      </Link>
    </div>
  );
  return (
    <div className="exercises-list">
      <List items={props.exercises} getItem={getItem} />
      <div className="fixed-action-btn">
        <Link
          to="/select/type"
          className="btn-floating btn-large red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ExercisesList;
