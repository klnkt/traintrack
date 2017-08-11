import { connect } from 'react-redux';
import { updatePropertyValue } from '../Actions';
import Exercise from './ExerciseProperties';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ properties: state.exercises.edited.properties });

const mapDispatchToProps = dispatch => ({
  onChange: (id, value) => dispatch(updatePropertyValue(id, value)),
});
const RExerciseProperties = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RExerciseProperties;

