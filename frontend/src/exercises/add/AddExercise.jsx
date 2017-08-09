import React from 'react';
import PropTypes from 'prop-types';


const Exercise = props => (
  <div className="exercise">
    {JSON.stringify(props.exercise)}
  </div>
);


Exercise.propTypes = {
  exercise: PropTypes.shape({
    type: PropTypes.shape({
      id: PropTypes.number.id,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Exercise;
