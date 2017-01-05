import React from 'react';
import { shallow } from 'enzyme';

import { Operator } from '../../src/js/components/Operator';


describe( 'Test Operator component |', function() {

  it( 'test componentWillMount logic', function() {
    localStorage.setItem( 'token', 'olalah' );
    var test;
    const wrapper = shallow(
      <Operator
        findTourist={ () => {} }
        resetTouristCardData={ () => {} }
        turnOnTouristCardCreation={ () => {} }
        getDepartments={ ( token ) => {
          test = token;
        } }
        isTouristCardDataChange={ false }
        isTouristCardCreation={ false }
      />
    );

    expect( test ).toBe( 'olalah' );
  } );

  it( 'test componentWillReceiveProps logic', function() {
    const wrapper = shallow(
      <Operator
        findTourist={ () => {} }
        resetTouristCardData={ () => {} }
        turnOnTouristCardCreation={ () => {} }
        getDepartments={ ( token ) => {} }
        isTouristCardDataChange={ false }
        isTouristCardCreation={ false }
      />
    );

    wrapper.setState({touristCardPk: 1});
    expect( wrapper.state( 'touristCardPk' ) ).toBe( 1 );

    // simulate new props update
    wrapper.setProps({fake: true});

    expect( wrapper.state( 'touristCardPk' ) ).toBe( '' );
  } );

  it( 'test findTourist method', function() {
    localStorage.setItem( 'token', 'ololo' );
    var test;
    const wrapper = shallow(
      <Operator
        findTourist={ ( val1, val2 ) => { test = {val1: val1, val2: val2} } }
        resetTouristCardData={ () => {} }
        turnOnTouristCardCreation={ () => {} }
        getDepartments={ ( token ) => {} }
        isTouristCardDataChange={ false }
        isTouristCardCreation={ false }
      />
    );

    // check error changing in the state
    wrapper.setState({error: 'ERROR!', touristCardPk: 'CARD!'});

    wrapper.find( 'button' ).first().simulate( 'click', { preventDefault() {} });

    expect( wrapper.state( 'error' ) ).toBe( '' );
    expect( test.val1 ).toBe( 'ololo' );
    expect( test.val2 ).toBe( 'CARD!' );
  } );

  it( 'test findTourist method getting error', function() {
    localStorage.setItem( 'token', 'ololo' );
    var test;
    const wrapper = shallow(
      <Operator
        findTourist={ ( val1, val2 ) => { test = {val1: val1, val2: val2} } }
        resetTouristCardData={ () => {} }
        turnOnTouristCardCreation={ () => {} }
        getDepartments={ ( token ) => {} }
        isTouristCardDataChange={ false }
        isTouristCardCreation={ false }
      />
    );

    wrapper.find( 'button' ).first().simulate( 'click', { preventDefault() {} });

    expect( wrapper.state( 'error' ) ).toBe( 'Enter a card id in the beginning' );
    expect( test ).toBe( undefined );
  } );

} );
