import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { addExerciseType, updateExerciseType, setEditedExerciseType, changeEditedExerciseType } from '../Actions';
import Exercise from './Exercise';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ exercise: state.exerciseTypes.edited });

const mapDispatchToProps = dispatch => ({
  save: isNew => dispatch(isNew ? addExerciseType() : updateExerciseType()),
  goBack: () => dispatch(
      goBack(),
    ),
  setExercise: exerciseId => dispatch(setEditedExerciseType(exerciseId)),
  onChange: changes => dispatch(changeEditedExerciseType(changes)),
});
const RAddExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RAddExercise;

