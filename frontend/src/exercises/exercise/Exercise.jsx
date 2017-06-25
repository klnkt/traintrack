import React from 'react';
import PropTypes from 'prop-types';
import './Exercise.css';

function Exercise({ match }) {
  return (
    <div className="Exercise">
        I am a Exercise
        my id: {match.params.id}
    </div>
  );
}

Exercise.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
export default Exercise;
