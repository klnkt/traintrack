import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AddExercise from './AddExercise';
import { addExercise } from '../Actions';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ exercise: state.exercises.edited });

const mapDispatchToProps = dispatch => ({
  save: () => dispatch(addExercise()),
  returnToList: () => dispatch(
      push('/exercises'),
    ),
});
const RAddExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExercise);

export default RAddExercise;

