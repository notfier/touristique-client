import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = ( state ) => {
  return {
    departments: state.departments
  }
};

const mapDispatchToProps = ( dispatch ) => {};
