import React from 'react';
import PropTypes from 'prop-types';

import './List.css';
/* eslint "react/no-unused-prop-types":0 */
function List(props) {
  return (
    <div className="List">
      {
        props.items.map(item => props.getItem(item))
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
  getItem: PropTypes.func.isRequired,
};
List.defaultProps = {
  items: [],
  onItemClick: null,
};
export default List;
