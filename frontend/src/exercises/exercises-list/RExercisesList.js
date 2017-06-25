import { connect } from 'react-redux';
import { addExercise } from '../Actions';
import ExercisesList from './ExercisesList';
/* eslint no-console: 0 */
const mapStateToProps = state => ({
  exercises: state.exercises,
});

const mapDispatchToProps = dispatch => ({
  addExercise: () => {
    dispatch(
      addExercise(),
    );
  },
});
const RExercisesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExercisesList);

export default RExercisesList;

