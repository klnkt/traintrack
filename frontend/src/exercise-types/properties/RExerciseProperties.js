import { connect } from 'react-redux';
import { addProperty } from '../Actions';
import Exercise from './ExerciseProperties';
/* eslint no-console: 0 */
const mapStateToProps = state => ({ properties: state.exerciseTypes.edited.properties });

const mapDispatchToProps = dispatch => ({
  addProperty: propertyName => dispatch(addProperty(propertyName)),
});
const RExerciseProperties = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Exercise);

export default RExerciseProperties;

