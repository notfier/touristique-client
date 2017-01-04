import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CreateNewTouristCard } from '../components/CreateNewTouristCard';
import { createTouristCard } from '../actions/createTouristCard';
import { changeInternallyTouristInfo } from '../actions/changeInternallyTouristInfo';


const mapStateToProps = ( state ) => {
  return {
    errors: state.errors,
    departments: state.departments,
    tourist: state.touristCardData ? state.touristCardData.tourist : {}
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    createTouristCard: bindActionCreators( createTouristCard, dispatch ),
    changeInternallyTouristInfo: bindActionCreators(
      changeInternallyTouristInfo, dispatch
    )
  };
};

export const CreateNewTouristCardContainer = connect(
  mapStateToProps, mapDispatchToProps
)( CreateNewTouristCard );
