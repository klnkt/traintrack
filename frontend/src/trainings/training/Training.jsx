import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExerciseSets from '../../exercises/exercise-sets/ExerciseSets';
import history from '../../history';
import Spoiler from '../../common/spoiler/Spoiler';
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
    return (<ul className="collection with-header">
      <li className="collection-header"><h4>Exercises</h4></li>
      {exercises.map(exercise =>
        (<li className="collection-item">
          <Spoiler
            title={<h5>{exercise.title}</h5>}
            content={(
              <ExerciseSets
                sets={exercise.sets}
                setState={partialState =>
                  this.props.save(
                    {
                      ...this.props.item,
                      exercises: updateExercise({ ...partialState, id: exercise.id }) },
                  )}
              />
            )}
          />
        </li>),
      )}
    </ul>);
  }

  render() {
    return (<section className="section">
      <header>{this.props.item.title}</header>
      {this.getExercisesList(this.props.item.exercises)}
      <Link to={`${this.props.item.id}/addexercise`}>
        Add exercise
      </Link>
      <button onClick={() => history.goBack()}>
        Go back
      </button>
    </section>);
  }
}


Training.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  }).isRequired,
  save: PropTypes.func.isRequired,
};
export default Training;
