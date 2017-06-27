import { connect } from 'react-redux';
import Training from './Training';
import { updateTraining } from '../Actions';
/* eslint no-console: 0 */
const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id, 10);
  const training = state.trainings
    .filter(item => item.id === id)[0];
  return {
    item: {
      ...training,
      exercises: training.exercises.map((exercise) => {
        const fullExercise = state.exercises.filter(item => item.id === exercise.id)[0];
        return { ...exercise, ...fullExercise };
      }),
    },
  };
};

const mapDispatchToProps = dispatch => ({
  save: state => dispatch(updateTraining(state)),
});

const RTraining = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Training);

export default RTraining;
