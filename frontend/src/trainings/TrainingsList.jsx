import React from 'react';
import List from '../list/List';
import './TrainingsList.css';

class TrainingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [
        {
          id: 1,
          title: 'first training',
        },
        {
          id: 2,
          title: 'second training',
        },
      ],
    };
  }
  render() {
    return (
      <div className="TrainingsList">
        <List items={this.state.trainings} root="/trainings" />
      </div>
    );
  }
}

export default TrainingsList;
