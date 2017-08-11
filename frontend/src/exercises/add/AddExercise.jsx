import React from 'react';
import PropTypes from 'prop-types';
import RExerciseProperties from '../properties/RExerciseProperties';

const Exercise = props => (
  <div className="exercise">
    <form
      name="exercise"
      id="exercise"
      onSubmit={(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.target.checkValidity()) {
          props.save(evt);
          props.returnToList();
        }
      }}
    >
      <div className="input-field">
        <input
          type="text"
          name="title"
          value={props.exercise.title}
          disabled
        />
        <label className="active" htmlFor="exercise-title">Exercise</label>
      </div>
      <RExerciseProperties />
    </form>
    <button type="submit" className="btn-flat" form="exercise">
      save
    </button>
    <button type="button" className="btn-flat" onClick={() => props.returnToList()}>
      back
    </button>
  </div>
);


Exercise.propTypes = {
  exercise: PropTypes.shape({
    typeId: PropTypes.number.id,
    title: PropTypes.string.isRequired,
  }).isRequired,
  save: PropTypes.func.isRequired,
  returnToList: PropTypes.func.isRequired,
};

export default Exercise;
