import React from 'react';
import PropTypes from 'prop-types';

import './List.css';
/* eslint "react/no-unused-prop-types":0 */
function List(props) {
  return (
    <div className="List">
        I am a list
        {
          props.items.map(item =>
            (<div className="List-item">
              <button onClick={() => props.onItemClick(item.id)}>{item.title} {item.isAdded ? 'true' : 'false'}
              </button>
            </div>),
          )
        }
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  onItemClick: PropTypes.func,
};
List.defaultProps = {
  items: [],
  onItemClick: null,
};
export default List;
