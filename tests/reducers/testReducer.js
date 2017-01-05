import rootReducer from '../../src/js/reducers/reducer';
import * as types from '../../src/js/constants/ActionTypes';


describe( 'Test Reducer |', function() {

  it( 'test default', function() {
    const reducer = rootReducer(
      {
        default: true
      },
      {}
    );

    expect( reducer.default ).toBe( true );
  } );

  it( 'test CHANGE_INTERNALLY_TOURIST_INFO', function() {
    const reducer = rootReducer(
      {
        touristCardData: {tourist: {'info': false}}
      },
      {
        type: types.CHANGE_INTERNALLY_TOURIST_INFO,
        newTouristInfo: {
          'info': true
        }
      }
    );

    expect( reducer.touristCardData.tourist.info ).toBe( true );
  } );

  it( 'test FIND_TOURIST', function() {
    const reducer = rootReducer(
      {
        touristCardData: {'info': false},
        errors: 'something'
      },
      {
        type: types.FIND_TOURIST,
        touristCardData: {
          'tourist': {'info': true}
        }
      }
    );

    expect( reducer.touristCardData.tourist.info ).toBe( true );
    expect( reducer.isTouristCardDataChange ).toBe( true );
    expect( reducer.isTouristCardCreation ).toBe( false );
    expect( reducer.errors ).toBe( null );
  } );

  it( 'test TURN_ON_TOURIST_CARD_CREATION', function() {
    const reducer = rootReducer(
      {
        touristCardData: {'info': false},
        errors: 'something'
      },
      {
        type: types.TURN_ON_TOURIST_CARD_CREATION
      }
    );

    expect( reducer.touristCardData ).toBe( null );
    expect( reducer.isTouristCardCreation ).toBe( true );
    expect( reducer.errors ).toBe( null );
  } );

  it( 'test RESET_TOURIST_CARD_DATA', function() {
    const reducer = rootReducer(
      {
        touristCardData: {'info': false},
        errors: 'something'
      },
      {
        type: types.RESET_TOURIST_CARD_DATA
      }
    );

    expect( reducer.touristCardData ).toBe( null );
    expect( reducer.isTouristCardCreation ).toBe( false );
    expect( reducer.isSavedSuccessfully ).toBe( false );
    expect( reducer.isTouristCardDataChange ).toBe( false );
  } );

  it( 'test CREATE_TOURIST_CARD', function() {
    const reducer = rootReducer(
      {
        isTouristCardCreation: true,
        isTouristCardDataChange: true,
        touristCardData: 'something'
      },
      {
        type: types.CREATE_TOURIST_CARD
      }
    );

    expect( reducer.touristCardData ).toBe( null );
    expect( reducer.isTouristCardCreation ).toBe( false );
    expect( reducer.isTouristCardDataChange ).toBe( false );
  } );

  it( 'test GET_ERROR_DURING_UPDATE', function() {
    const reducer = rootReducer(
      {
        errors: null,
        isSavedSuccessfully: true
      },
      {
        type: types.GET_ERROR_DURING_UPDATE,
        errors: 'ERROR!'
      }
    );

    expect( reducer.errors ).toBe( 'ERROR!' );
    expect( reducer.isSavedSuccessfully ).toBe( false );
  } );

  it( 'test SAVE_TOURIST_CARD_INFO_SUCCESSFULLY', function() {
    const reducer = rootReducer(
      {
        errors: 'something!',
        isSavedSuccessfully: false
      },
      {
        type: types.SAVE_TOURIST_CARD_INFO_SUCCESSFULLY,
        errors: 'ERROR!'
      }
    );

    expect( reducer.errors ).toBe( null );
    expect( reducer.isSavedSuccessfully ).toBe( true );
  } );

  it( 'test SET_INITIAL_DEPARTMENTS', function() {
    const reducer = rootReducer(
      {
        departments: null
      },
      {
        type: types.SET_INITIAL_DEPARTMENTS,
        departments: 'DEPS!'
      }
    );

    expect( reducer.departments ).toBe( 'DEPS!' );
  } );

} );
