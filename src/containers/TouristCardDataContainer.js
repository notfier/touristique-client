import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TouristCardData } from '../components/TouristCardData';
import { saveTouristCardInfo } from '../actions/saveTouristCardInfo';
import { changeInternallyTouristInfo } from '../actions/changeInternallyTouristInfo';


const mapStateToProps = ( state ) => {
  return {
    errors: state.errors,
    departments: state.departments,
    isSavedSuccessfully: state.isSavedSuccessfully,
    tourist: state.touristCardData.tourist,
    created: state.touristCardData.created,
    card_id: state.touristCardData.card_id,
    current_department: state.touristCardData.current_department,
    is_active: state.touristCardData.is_active
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    saveTouristCardInfo: bindActionCreators( saveTouristCardInfo, dispatch ),
    changeInternallyTouristInfo: bindActionCreators(
      changeInternallyTouristInfo, dispatch
    )
  }
};

export const TouristCardDataContainer = connect(
  mapStateToProps, mapDispatchToProps
)( TouristCardData );
