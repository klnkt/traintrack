import { connect } from 'react-redux';
import Exercise from './Exercise';
import { updateExerciseType } from '../Actions';

const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id, 10);
  const exercise = state.exerciseTypes
    .filter(item => item.id === id)[0];
  return { exercise };
};

const mapDispatchToProps = dispatch => ({
  save: state => dispatch(updateExerciseType(state)),
});

const RExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RExercise;
