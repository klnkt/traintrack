import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../../list/List';
import history from '../../history';

import './AddExercisesList.css';

class AddExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingId: props.trainingId,
      exercises: props.exercises,
    };
  }

  onClick(id) {
    this.setState({
      exercises: this.state.exercises.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      }).sort((a, b) => a.id - b.id),
    });
  }

  getItem(item) {
    return (
      <div className="List-item">
        <button onClick={() => this.onClick(item.id)}>
          {item.title} {item.isSelected ? 'selected' : ''}
        </button>
        <Link to={`/exercises/${item.id}`}>change {item.title}</Link>
      </div>);
  }

  save() {
    this.props.save(this.state);
    history.goBack();
  }
  render() {
    return (
      <div className="AddExercisesList">
        <List
          items={this.state.exercises}
          getItem={item => this.getItem(item)}
        />
      </div>);
  }
}

AddExercisesList.propTypes = {
  trainingId: PropTypes.number.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ),
  save: PropTypes.func.isRequired,
};
AddExercisesList.defaultProps = {
  exercises: [],
};

export default AddExercisesList;
