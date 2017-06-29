import React from 'react';
import PropTypes from 'prop-types';

import './ExerciseSets.scss';

class ExerciseSets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.sets.length ? props.sets[0] : 10 };
  }

  addSet(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.setState({
      sets: [...this.props.sets, this.state.count],
    });
  }

  deleteSet(index) {
    this.props.setState({
      sets: this.props.sets.filter((item, i) => i !== index),
    });
  }

  updateCount(value) {
    this.setState({
      count: this.state.count + value,
    });
  }
  render() {
    return (
      <div>
        <ul className="collection with-header">
          {
            this.props.sets.map((set, index) => (
              <div className="collection-item exercise-sets__set">
                <span className="exercise-sets__set-count">{set}</span>
                <button
                  className="waves-effect waves-light  red lighten-2 btn-flat white-text"
                  onClick={() => this.deleteSet(index)}
                >
                  delete
                </button>
              </div>))
          }
        </ul>
        <form
          onSubmit={evt => this.addSet(evt)}
        >
          <div className="exercise-sets__selector">
            <button
              type="button"
              className={`btn btn-floating exercise-sets__counter-action 
              ${this.state.count <= 0 ? 'disabled' : ''}`}
              onClick={() => this.updateCount(-1)}
            >
              <i className="material-icons">remove</i>
            </button>
            <div className="input-field inline exercise-sets__input">
              <input
                type="number"
                name="repetitons"
                id="repetitions"
                className="exercise-sets__selector-value"
                value={this.state.count}
                readOnly
              />
              <label
                className="active"
                htmlFor="repetitons"
              >
                  Repetitons
              </label>
            </div>
            <button
              type="button"
              className="btn btn-floating exercise-sets__counter-action"
              onClick={() => this.updateCount(1)}
            >
              <i className="material-icons">add</i>
            </button>
          </div>
          <input type="submit" value="add" className="waves-effect waves-light btn" />
        </form>
      </div>
    );
  }
}

ExerciseSets.propTypes = {
  sets: PropTypes.arrayOf(PropTypes.number).isRequired,
  setState: PropTypes.func.isRequired,
};
export default ExerciseSets;
