import { connect } from 'react-redux';
import { addTraining } from '../Actions';
import TrainingsList from './TrainingsList';
/* eslint no-console: 0 */
const mapStateToProps = state => ({
  trainings: state.trainings,
});

const mapDispatchToProps = dispatch => ({
  addTraining: () => {
    dispatch(
      addTraining(),
    );
  },
});
const RTrainingsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingsList);

export default RTrainingsList;

