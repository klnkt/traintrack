import { connect } from 'react-redux';
// import { goBack } from 'react-router-redux';
import Exercise from './AddExercise';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ exercise: state.exercises.edited });

// const mapDispatchToProps = dispatch => ({
//   save: isNew => dispatch(isNew ? addExerciseType() : updateExerciseType()),
//   goBack: () => dispatch(
//       goBack(),
//     ),
//   setExercise: exerciseId => dispatch(setEditedExerciseType(exerciseId)),
//   onChange: changes => dispatch(changeEditedExerciseType(changes)),
// });
const RAddExercise = connect(
  mapStateToProps,
)(Exercise);

export default RAddExercise;

