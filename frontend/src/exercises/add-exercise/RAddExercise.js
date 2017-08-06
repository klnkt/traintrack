import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { addExercise, updateExercise, setEditedExercise, changeEditedExercise } from '../Actions';
import Exercise from '../exercise/Exercise';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ exercise: state.exercises.edited });

const mapDispatchToProps = dispatch => ({
  save: isNew => dispatch(isNew ? addExercise() : updateExercise()),
  goBack: () => dispatch(
      goBack(),
    ),
  setExercise: exerciseId => dispatch(setEditedExercise(exerciseId)),
  onChange: changes => dispatch(changeEditedExercise(changes)),
});
const RAddExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RAddExercise;

