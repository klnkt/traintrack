import React from 'react';
import PropTypes from 'prop-types';
import RExercisesList from '../exercises-list/RExercisesList';
import history from '../../history';

const AddExercise = (props) => {
  const getItem = item => (
    <div className="List-item">
      <button onClick={() => { props.addExercise(props.trainingId, item); history.goBack(); }}>
        {item.title}
      </button>
    </div>
  );
  return (
    <RExercisesList getItem={getItem} />
  );
};

AddExercise.propTypes = {
  trainingId: PropTypes.number.isRequired,
  addExercise: PropTypes.func.isRequired,
};

export default AddExercise;
