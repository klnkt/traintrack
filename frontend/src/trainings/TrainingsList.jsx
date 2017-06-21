import React from 'react';
import PropTypes from 'prop-types';
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
        <List items={this.state.trainings} root="/trainings" onClick={this.props.onClick} />
      </div>
    );
  }
}

TrainingsList.propTypes = {
  onClick: PropTypes.func,
};
TrainingsList.defaultProps = {
  onClick: () => {},
};

export default TrainingsList;
