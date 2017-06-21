import React from 'react';
import List from '../list/List';
import './Exercises.css';

class ExercisesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          id: 1,
          title: 'first exercise',
        },
        {
          id: 2,
          title: 'second exercise',
        },
      ],
    };
  }
  render() {
    return (
      <div className="ExercisesList">
        <List items={this.state.exercises} root="/exercises" />
      </div>
    );
  }
}

export default ExercisesList;
