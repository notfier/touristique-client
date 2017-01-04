import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Operator } from '../components/Operator';
import { getDepartments } from '../actions/getDepartments';
import { findTourist } from '../actions/findTourist';
import { resetTouristCardData } from '../actions/resetTouristCardData';
import { turnOnTouristCardCreation } from '../actions/turnOnTouristCardCreation';


const mapStateToProps = ( state ) => {
  return {
    isTouristCardDataChange: state.isTouristCardDataChange,
    isTouristCardCreation: state.isTouristCardCreation
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    getDepartments: bindActionCreators( getDepartments, dispatch ),
    findTourist: bindActionCreators( findTourist, dispatch ),
    resetTouristCardData: bindActionCreators( resetTouristCardData, dispatch ),
    turnOnTouristCardCreation: bindActionCreators(
      turnOnTouristCardCreation, dispatch
    )
  };
};

export const OperatorContainer = connect(
  mapStateToProps, mapDispatchToProps
)( Operator );
