import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../list/List';
import TrainingsStore from '../trainings/TrainingsStore';
import ExercisesStore from './ExercisesStore';
import history from '../history';

import './AddExercisesList.css';

class AddExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const id = parseInt(this.props.match.params.id, 10);
    const allExercises = ExercisesStore.getAll();
    const selectedExercisesIds = TrainingsStore.getById(id).exerciseIds;
    this.setState({
      trainingId: id,
      exercises: allExercises.map((exercise) => {
        const isSelected = (selectedExercisesIds.indexOf(exercise.id) !== -1);
        return { ...exercise, isSelected };
      }).sort((a, b) => a.id - b.id),
    });
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
        <button onClick={() => this.onItemClick(item.id)}>
          {item.title} {item.isSelected ? 'selected' : ''}
        </button>
        <Link to={`/exercises/${item.id}`}>change {item.title}</Link>
      </div>);
  }

  save() {
    TrainingsStore.update({
      id: this.state.trainingId,
      exerciseIds: this.state.exercises.filter(item => item.isSelected).map(item => item.id),
    });
    history.goBack();
  }

  render() {
    return (
      <div className="AddExercisesList">
        Selected
        <List
          items={this.state.exercises.filter(item => item.isSelected)}
          getItem={this.getItem}
        />
        Not selected
        <List
          items={this.state.exercises.filter(item => !item.isSelected)}
          getItem={this.getItem}
        />
        <button onClick={() => this.save()}> save </button>
      </div>
    );
  }
}

AddExercisesList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default AddExercisesList;
