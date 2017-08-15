import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '../../list/List';

const ExercisesByDateList = (props) => {
  const getItem = item => (
    <div className="exercise-item">
      {item.title}
    </div>
  );

  const getGroup = group => (
    <div className="exercises-group">
      <header>{group.header}</header>
      <List items={group.items} getItem={getItem} />
    </div>
  );
  return (
    <div className="exercises-list">
      <List items={props.groups} getItem={getGroup} />
      <div className="fixed-action-btn">
        <Link
          to="/select/type"
          className="btn-floating btn-large red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

ExercisesByDateList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default ExercisesByDateList;
