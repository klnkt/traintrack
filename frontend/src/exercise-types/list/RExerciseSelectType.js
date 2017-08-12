import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ExerciseSelectType from './ExerciseSelectType';
import { setEditedExerciseType } from '../../exercises/Actions';

/* eslint no-console: 0 */
const mapStateToProps = state => ({
  exercises: state.exerciseTypes.list,
});

const mapDispatchToProps = dispatch => ({
  setEditedExerciseType: item => dispatch(setEditedExerciseType(item)),
  goToExercise: () => dispatch(push('/add/exercise')),
});
const RExerciseSelectType = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExerciseSelectType);

export default RExerciseSelectType;

