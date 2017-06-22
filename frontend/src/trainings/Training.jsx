import React from 'react';
import PropTypes from 'prop-types';
import TrainingsStore from './TrainingsStore';

import './Training.css';

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const id = parseInt(this.props.match.params.id, 10);
    this.setState({
      item: TrainingsStore.getById(id),
    });
  }

  onTitleChange(event) {
    this.setState({
      item: { ...this.state.item, title: event.target.value },
    });
  }

  getControls() {
    let element = '';
    if (!this.state.isEditMode) {
      element = <button onClick={() => this.toggleEditMode()}> Edit </button>;
    } else {
      element = (
        <div>
          <button onClick={() => this.updateTitle()}> Save </button>
          <button onClick={() => this.revertTitle()}> Cancel </button>
        </div>
      );
    }
    return element;
  }

  toggleEditMode() {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  }

  updateTitle() {
    TrainingsStore.updateItem(this.state.item);
    this.toggleEditMode();
  }
  revertTitle() {
    this.setState({
      item: TrainingsStore.getById(this.state.item.id),
    });
    this.toggleEditMode();
  }
  render() {
    return (
      <div className="Training">
        my id: {this.state.item.id}
        { this.state.isEditMode ?
          <input
            value={this.state.item.title}
            onChange={evt => this.onTitleChange(evt)}
          /> :
          <span>{this.state.item.title}</span>}
        {this.getControls()}
      </div>
    );
  }
}

Training.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
export default Training;
