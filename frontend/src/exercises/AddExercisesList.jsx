import React from 'react';
import List from '../list/List';
import './AddExercisesList.css';

class AddExercisesList extends React.Component {
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

  onClick(id) {
    this.setState({
      exercises: this.state.exercises.map((item) => {
        if (item.id === id) {
          return { ...item, isAdded: true };
        }
        return item;
      }),
    });
  }
  render() {
    return (
      <div className="AddExercisesList">
        <List
          items={this.state.exercises}
          root="/exercises"
          onItemClick={item => this.onClick(item)}
        />
      </div>
    );
  }
}

export default AddExercisesList;
