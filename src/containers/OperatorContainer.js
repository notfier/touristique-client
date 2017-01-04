import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Operator } from '../components/Operator';
import { getDepartments } from '../actions/getDepartments';
import { findTourist } from '../actions/findTourist';
import { saveTouristCardInfo } from '../actions/saveTouristCardInfo';
import { changeInternallyTouristInfo } from '../actions/changeInternallyTouristInfo';


const mapStateToProps = ( state ) => {
  return {
    departments: state.departments,
    touristCardData: state.touristCardData
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    getDepartments: bindActionCreators( getDepartments, dispatch ),
    findTourist: bindActionCreators( findTourist, dispatch ),
    saveTouristCardInfo: bindActionCreators( saveTouristCardInfo, dispatch ),
    changeInternallyTouristInfo: bindActionCreators(
      changeInternallyTouristInfo, dispatch
    )
  }
};

export const OperatorContainer = connect(
  mapStateToProps, mapDispatchToProps
)( Operator );
