import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../history';

import './Training.css';

const getExercisesList = item => (
  <div>
    exercises list
    {item.exercises.map(exercise =>
      <div>{exercise.id} {exercise.title}</div>,
    )}
    <Link to={`/trainings/${item.id}/exercises`}>change</Link>
  </div>
);
const Training = props => (
  <div className="Training">
    my id: {props.item.id}
    {getExercisesList(props.item)}
    <button onClick={() => history.goBack()}>
      Go back
    </button>
  </div>
);


Training.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  }),
};
export default Training;
