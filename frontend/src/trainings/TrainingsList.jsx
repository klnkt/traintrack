import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/List';
import TrainingsStore from './TrainingsStore';
import './TrainingsList.css';

class TrainingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
    };
  }
  componentWillMount() {
    this.setState({
      trainings: TrainingsStore.getAll(),
    });
  }
  addTraining() {
    this.setState(
      {
        trainings: this.state.trainings.concat({
          id: this.state.trainings.length,
          title: 'new training',
        }),
      },
    );
  }
  render() {
    return (
      <div className="TrainingsList">
        <button
          className="TrainingsListAdd"
          onClick={() => this.addTraining()}
        >
          Add
        </button>
        <List items={this.state.trainings} root="/trainings" onItemClick={this.props.onItemClick} />
      </div>
    );
  }
}

TrainingsList.propTypes = {
  onItemClick: PropTypes.func,
};
TrainingsList.defaultProps = {
  onItemClick: null,
};

export default TrainingsList;
