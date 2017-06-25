import { connect } from 'react-redux';
import Training from './Training';
/* eslint no-console: 0 */
const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id, 10);
  const training = state.trainings
    .filter(item => item.id === id)[0];
  return {
    item: {
      ...training,
      exercises: state.exercises.filter(exercise =>
        (training.exerciseIds.indexOf(exercise.id) !== -1),
      ),
    },
  };
};

const RTraining = connect(
  mapStateToProps,
)(Training);

export default RTraining;
