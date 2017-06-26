import { connect } from 'react-redux';
import Exercise from './Exercise';
import { updateExercise } from '../Actions';

const mapStateToProps = (state, { match }) => {
  const id = parseInt(match.params.id, 10);
  const exercise = state.exercises
    .filter(item => item.id === id)[0];
  return { exercise };
};

const mapDispatchToProps = dispatch => ({
  save: state => dispatch(updateExercise(state)),
});

const RExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RExercise;
