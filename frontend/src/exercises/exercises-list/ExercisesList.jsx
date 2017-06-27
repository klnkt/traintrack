import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '../../list/List';

import './ExercisesList.scss';

const getItem = item => (
  <div className="List-item">
    <Link to={`exercises/${item.id}`}>{item.title}</Link>
  </div>
);

const ExercisesList = props => (
  <div className="exercises-list">
    <List items={props.exercises} getItem={props.getItem} />
    <button onClick={props.addExercise}>add</button>
  </div>
);

ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addExercise: PropTypes.func.isRequired,
  getItem: PropTypes.func,
};
ExercisesList.defaultProps = {
  getItem,
};
export default ExercisesList;
