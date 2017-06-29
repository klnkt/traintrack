import React from 'react';
import PropTypes from 'prop-types';

// import './Spoiler.scss';

class Spoiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div className="spoiler">
        <button
          className={`spoiler__trigger 
          ${this.state.isOpen ? 'spoiler__trigger--active' : ''}`}
          onClick={() => this.toggle()}
        >
          <span>{this.props.title}</span>
          <i className={`material-icons spoiler__trigger-icon 
            ${this.state.isOpen ? 'spoiler__trigger-icon--flipped' : ''}`}
          >
              keyboard_arrow_down
          </i>
        </button>
        <div className={`spoiler__content 
            ${this.state.isOpen ? '' : 'spoiler__content--hidden'}`}
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

Spoiler.propTypes = {
  title: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

export default Spoiler;
