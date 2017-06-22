import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './List.css';
/* eslint "react/no-unused-prop-types":0 */
function List(props) {
  function getItem(item) {
    return (
      <div className="List-item">
        {props.onItemClick ?
          (<button onClick={() => props.onItemClick(item.id)}>{item.title}</button>) :
          (<Link to={`${props.root}/${item.id}`}>{item.title}</Link>)
        }
      </div>);
  }
  return (
    <div className="List">
        I am a list
        {
          props.items.map(item => getItem(item))
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
  root: PropTypes.string,
};
List.defaultProps = {
  items: [],
  onItemClick: null,
  root: '/',
};
export default List;
