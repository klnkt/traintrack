import React from 'react';
import PropTypes from 'prop-types';
import RExerciseProperties from '../properties/RExerciseProperties';

class AddExercise extends React.Component {

  componentWillMount() {
    if (this.props.exercise.typeId === undefined) {
      this.props.returnToList();
    }
  }
  render() {
    return (
      <div className="exercise">
        <form
          name="exercise"
          id="exercise"
          onSubmit={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.target.checkValidity()) {
              this.props.save(evt);
              this.props.returnToList();
            }
          }}
        >
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={this.props.exercise.title}
              disabled
            />
            <label className="active" htmlFor="title">Exercise</label>
          </div>
          <div className="input-field">
            <input
              type="date"
              name="date"
              value={this.props.exercise.date}
              disabled
            />
            <label className="active" htmlFor="date">Date</label>
          </div>
          <RExerciseProperties />
        </form>
        <button type="submit" className="btn-flat" form="exercise">
          save
        </button>
        <button type="button" className="btn-flat" onClick={() => this.props.returnToList()}>
          back
        </button>
      </div>
    );
  }
}


AddExercise.propTypes = {
  exercise: PropTypes.shape({
    typeId: PropTypes.number.id,
    title: PropTypes.string,
    date: PropTypes.objectOf(Date),
  }).isRequired,
  save: PropTypes.func.isRequired,
  returnToList: PropTypes.func.isRequired,
};

AddExercise.defaultProps = {
  title: '',
};
export default AddExercise;
