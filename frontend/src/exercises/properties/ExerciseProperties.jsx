// due to propTypes bug we have to disable it
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ExerciseProperties = props => (
  <div className="exercise-properties">
    <header>Exercise properties</header>
    <ul className="collection">
      {props.properties.map(item =>
        (<li
          className="collection-item"
          key={item.id}
        >
          <span>{item.title}</span>
          <input
            type="text"
            autoComplete="off"
            value={item.value}
            onChange={evt =>
            props.onChange(item.id, parseInt(evt.target.value, 10))}
          />
        </li>),
      )}
    </ul>
  </div>
);

ExerciseProperties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

ExerciseProperties.defaultProps = {
  properties: [],
};
export default ExerciseProperties;
