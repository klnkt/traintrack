import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import './Exercise.css';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.exercise;
  }
  onInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  getSets() {
    return (
      <div className="Sets">
        {
          this.state.sets.map((set, index) => (
            <div className="Set">
              {set}
              <button onClick={() => this.deleteSet(index)}>delete</button>
            </div>))
        }
      </div>
    );
  }

  addSet(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      sets: [...this.state.sets, event.target.elements[0].value],
    });
  }

  deleteSet(index) {
    this.setState({
      sets: this.state.sets.filter((item, i) => i !== index),
    });
  }

  save(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.save(this.state);
    history.goBack();
  }

  render() {
    return (
      <div className="Exercise">
        <form name="exercise" onSubmit={evt => this.save(evt)}>
          my id: {this.state.id}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={evt => this.onInputChange(evt)}
          />
          {this.getSets()}
          <form className="AddSet" onSubmit={evt => this.addSet(evt)}>
            <input type="number" name="repetitons" />
            <input type="submit" value="add" />
          </form>
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}

Exercise.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    sets: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  save: PropTypes.func.isRequired,
};
export default Exercise;
