import React from 'react';
import PropTypes from 'prop-types';

import './ExerciseProperties.scss';

class ExerciseProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: '',
    };
  }
  render() {
    return (
      <div className="exercise-properties">
        <header>Exercise properties</header>
        <ul className="collection">
          {this.props.properties.map(item =>
            (<li
              className="collection-item"
              key={item.id}
            >
              {item.title}
            </li>),
          )}
        </ul>
        <form
          className="exercise-properties__add-property"
          onSubmit={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.target.checkValidity()) {
              this.props.addProperty(this.state.property);
              this.setState({ property: '' });
            }
          }}
        >
          <div className="input-field inline exercise-properties__add-property-input">
            <label className="active" htmlFor="propertyName">New property</label>
            <input
              id="propertyName"
              type="text"
              className="validate"
              autoComplete="off"
              required
              value={this.state.property}
              onChange={evt =>
              this.setState({ property: evt.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn"
          >
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    );
  }
}

ExerciseProperties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  addProperty: PropTypes.func.isRequired,
};

ExerciseProperties.defaultProps = {
  properties: [],
};
export default ExerciseProperties;
