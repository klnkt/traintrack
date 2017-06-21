import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './List.css';

function List(props) {
  return (
    <div className="List">
        I am a list
        {props.items.map(item =>
          (<div className="List-item">
            <Link to={`${props.root}/${item.id}`}>{item.title}</Link>
          </div>))
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
  root: PropTypes.string,
};
List.defaultProps = {
  items: [],
  root: '/',
};
export default List;
