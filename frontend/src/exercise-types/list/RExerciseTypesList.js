import { connect } from 'react-redux';
import ExercisesList from './ExerciseTypesList';

/* eslint no-console: 0 */
const mapStateToProps = (state, ownProps) => ({
  exercises: state.exerciseTypes.list,
  getItem: ownProps.getItem,
});

const RExerciseTypesList = connect(
  mapStateToProps,
)(ExercisesList);

export default RExerciseTypesList;

