import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '../../list/List';

import './ExerciseTypesList.scss';

const getItem = item => (
  <div className="List-item">
    <Link to={`/types/${item.id}`}>
      {item.title}
    </Link>
  </div>
);

const ExercisesList = props => (
  <div className="exercises-list">
    <List items={props.exercises} getItem={props.getItem} />
    <div className="fixed-action-btn">
      <Link
        to="/types/add"
        className="btn-floating btn-large red"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  </div>
);


ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getItem: PropTypes.func,
};

ExercisesList.defaultProps = {
  getItem,
};

export default ExercisesList;
