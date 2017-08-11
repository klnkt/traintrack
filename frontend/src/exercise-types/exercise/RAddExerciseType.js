import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { addExerciseType, updateExerciseType, setEditedExerciseType, changeEditedExerciseType } from '../Actions';
import ExerciseType from './ExerciseType';
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
const RAddExerciseType = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExerciseType);

export default RAddExerciseType;

