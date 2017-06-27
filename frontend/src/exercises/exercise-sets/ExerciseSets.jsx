import React from 'react';
import PropTypes from 'prop-types';

import './ExerciseSets.css';
/* eslint no-console: 0 */
class ExerciseSets extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  addSet(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.setState({
      sets: [...this.props.sets, event.target.elements[0].value],
    });
  }

  deleteSet(index) {
    this.props.setState({
      sets: this.props.sets.filter((item, i) => i !== index),
    });
  }

  render() {
    return (
      <div className="Sets">
        {
          this.props.sets.map((set, index) => (
            <div className="Set">
              {set}
              <button onClick={() => this.deleteSet(index)}>delete</button>
            </div>))
        }
        <form className="AddSet" onSubmit={evt => this.addSet(evt)}>
          <input type="number" name="repetitons" />
          <input type="submit" value="add" />
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
