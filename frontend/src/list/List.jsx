import React from 'react';
import PropTypes from 'prop-types';

import './List.css';
/* eslint "react/no-unused-prop-types":0 */
function List(props) {
  return (
    <ul className="collection">
      {
        props.items.map(item =>
          <li className="collection-item" key={item.id}>{props.getItem(item)}</li>)
      }
    </ul>
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
