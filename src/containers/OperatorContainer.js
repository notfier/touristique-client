import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Operator } from '../components/Operator';
import { getDepartments } from '../actions/getDepartments';
import { findTourist } from '../actions/findTourist';
import { resetTouristCardData } from '../actions/resetTouristCardData';


const mapStateToProps = ( state ) => {
  return {
    isTouristCardData: state.touristCardData ? true : false
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    getDepartments: bindActionCreators( getDepartments, dispatch ),
    findTourist: bindActionCreators( findTourist, dispatch ),
    resetTouristCardData: bindActionCreators( resetTouristCardData, dispatch )
  };
};

export const OperatorContainer = connect(
  mapStateToProps, mapDispatchToProps
)( Operator );
