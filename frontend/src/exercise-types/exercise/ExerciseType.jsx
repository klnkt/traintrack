import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import RExerciseProperties from '../properties/RExerciseProperties';
import './ExerciseType.css';

class ExerciseType extends React.Component {
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.setExercise(parseInt(this.props.match.params.id, 10));
    }
  }
  onInputChange({ target }) {
    this.props.onChange({
      [target.name]: target.value,
    });
  }

  save(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.save(this.props.exercise.isNew);
    history.goBack();
  }

  render() {
    return (
      <div className="exercise">
        <form
          name="exerciseType"
          id="exerciseType"
          onSubmit={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.target.checkValidity()) {
              this.save(evt);
            }
          }}
        >
          <div className="input-field">
            <input
              type="text"
              name="title"
              id="exercise-title"
              value={this.props.exercise.title}
              onChange={evt => this.onInputChange(evt)}
              required
            />
            <label className="active" htmlFor="exercise-title">Exercise</label>
          </div>
        </form>
        <RExerciseProperties />
        <button type="submit" className="btn-flat" form="exerciseType">
          save
        </button>
        <button type="button" className="btn-flat" onClick={() => this.props.goBack()}>
          back
        </button>
      </div>
    );
  }
}

ExerciseType.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  save: PropTypes.func.isRequired,
  setExercise: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

ExerciseType.defaultPropTypes = {
  exercise: {
    id: null,
  },
};
export default ExerciseType;
