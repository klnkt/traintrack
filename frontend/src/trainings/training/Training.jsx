import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExerciseSets from '../../exercises/exercise-sets/ExerciseSets';
import history from '../../history';

import './Training.css';

class Training extends React.Component {
  getExercisesList(exercises) {
    const updateExercise = item =>
      this.props.item.exercises.map((it) => {
        if (it.id === item.id) {
          return { ...it, ...item };
        }
        return it;
      });
    return (<div>
      exercises list
      {exercises.map(exercise =>
        (<div>
          {exercise.id} {exercise.title}
          <ExerciseSets
            sets={exercise.sets}
            setState={partialState =>
              this.props.save(
                {
                  ...this.props.item,
                  exercises: updateExercise({ ...partialState, id: exercise.id }) },
              )}
          />
        </div>),
      )}
    </div>);
  }

  render() {
    return (<div className="Training">
      my id: {this.props.item.id}
      {this.getExercisesList(this.props.item.exercises)}
      <Link to={`${this.props.item.id}/addexercise`}>
        Add exercise
      </Link>
      <button onClick={() => history.goBack()}>
        Go back
      </button>
    </div>);
  }
}


Training.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  }).isRequired,
  save: PropTypes.func.isRequired,
};
export default Training;
