import { connect } from 'react-redux';
import { addTrainingExercise } from '../../trainings/Actions';
import AddExercise from './AddExercise';
/* eslint no-console: 0 */
const mapStateToProps = (state, { match }) => ({
  trainingId: parseInt(match.params.id, 10),
});

const mapDispatchToProps = dispatch => ({
  addExercise: (id, exercise) => dispatch(addTrainingExercise(id, exercise)),
});
const RAddExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExercise);

export default RAddExercise;

