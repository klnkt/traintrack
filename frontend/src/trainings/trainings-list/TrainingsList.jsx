import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../../list/List';

import './TrainingsList.css';

const getItem = item => (
  <div className="List-item">
    <Link to={`trainings/${item.id}`}>{item.title}</Link>
  </div>
);

const TrainingsList = props => (
  <div className="TrainingsList">
    <button
      className="TrainingsListAdd"
      onClick={() => props.addTraining()}
    >
      Add
    </button>
    <List items={props.trainings} getItem={getItem} />
  </div>
);

TrainingsList.propTypes = {
  addTraining: PropTypes.func.isRequired,
  trainings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default TrainingsList;
