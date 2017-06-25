import { connect } from 'react-redux';
import { updateTraningExercises } from '../../trainings/Actions';
import AddExercisesList from './AddExercisesList';
/* eslint no-console: 0 */
const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id, 10);
  const selectedExercisesIds = state.trainings
    .filter(item => item.id === id)[0].exerciseIds;
  return {
    trainingId: id,
    exercises: state.exercises.map(exercise =>
    ({ ...exercise, isSelected: (selectedExercisesIds.indexOf(exercise.id) !== -1) }),
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  save: (state) => {
    dispatch(
      updateTraningExercises(
        state.trainingId,
        state.exercises
          .filter(item => item.isSelected)
          .map(item => item.id),
      ),
    );
  },
});
const RAddExercisesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExercisesList);

export default RAddExercisesList;
