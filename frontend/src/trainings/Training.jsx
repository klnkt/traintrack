import React from 'react';
import PropTypes from 'prop-types';
import './Training.css';

function Training({ match }) {
  return (
    <div className="Training">
        I am a Training
        my id: {match.params.id}
    </div>
  );
}

Training.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
export default Training;
