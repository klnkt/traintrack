import React from 'react';
import { Link, Route } from 'react-router-dom';
import Training from '../training/Training';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [
        {
          id: 1,
          title: 'foo',
        },
        {
          id: 2,
          title: 'bar',
        },
      ],
    };
  }
  render() {
    return (
      <div className="List">
          I am a list
          {this.state.trainings.map(training =>
            (<div className="List-item">
              <Link to={`/list/${training.id}`}>{training.title}</Link>
            </div>))
          }
        <Route path="/list/:id" component={Training} />
      </div>
    );
  }
}

export default List;
