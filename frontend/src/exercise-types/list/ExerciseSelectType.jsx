import React from 'react';
import PropTypes from 'prop-types';
import RExerciseTypesList from './RExerciseTypesList';

const ExercisesList = (props) => {
  const getItem = item => (
    <div className="List-item">
      <button onClick={() => { props.setEditedExerciseType(item); props.goToExercise(); }}>
        {item.title}
      </button>
    </div>
  );
  return (
    <RExerciseTypesList getItem={getItem} />
  );
};

ExercisesList.propTypes = {
  setEditedExerciseType: PropTypes.func.isRequired,
  goToExercise: PropTypes.func.isRequired,
};

export default ExercisesList;
