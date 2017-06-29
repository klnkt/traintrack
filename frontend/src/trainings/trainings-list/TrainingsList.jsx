import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../../list/List';

import './TrainingsList.css';

const getItem = item => (
  <div>
    <Link to={`trainings/${item.id}`}>{item.title}</Link>
  </div>
);

const TrainingsList = props => (
  <div className="TrainingsList">
    <div className="fixed-action-btn">
      <button
        onClick={() => props.addTraining()}
        className="btn-floating btn-large red"
      >
        <i className="material-icons">add</i>
      </button>
    </div>
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
