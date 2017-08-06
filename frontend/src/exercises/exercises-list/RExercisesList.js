import { connect } from 'react-redux';
import ExercisesList from './ExercisesList';

/* eslint no-console: 0 */
const mapStateToProps = state => ({
  exercises: state.exercises.list,
});

const RExercisesList = connect(
  mapStateToProps,
)(ExercisesList);

export default RExercisesList;

