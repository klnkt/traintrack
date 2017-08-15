import { connect } from 'react-redux';
import ExercisesByDateList from './ExercisesByDateList';

/* eslint no-console: 0 */
const mapStateToProps = (state) => {
  const list = state.exercises.list;

  const reduceByDate = (current, item) => {
    const timestamp = item.date.toISOString().split('T')[0];
    if (current[timestamp] === undefined) {
      current[timestamp] = {
        items: [item],
      };
    } else {
      current[timestamp].items.push(item);
    }
    return current;
  };

  const reducedExercises = list.reduce(reduceByDate, {});
  const result = Object.keys(reducedExercises).map((key, index) =>
    ({ ...reducedExercises[key], header: key, id: index }),
  );
  return {
    groups: result,
  };
};

const RExercisesByDateList = connect(
  mapStateToProps,
)(ExercisesByDateList);

export default RExercisesByDateList;

