import React from 'react';
import { shallow } from 'enzyme';

import { OperatorSignIn } from '../../src/js/components/OperatorSignIn';


describe( 'Test Operator component |', function() {

  it( 'test changeUsername method', function() {
    const wrapper = shallow(
      <OperatorSignIn/>
    );

    wrapper.find( 'input#cc2' ).simulate( 'change', {
      target: {value: 'adminchik'}
    } );

    expect( wrapper.state( 'username' ) ).toBe( 'adminchik' );
  } );

  it( 'test changePassword method', function() {
    const wrapper = shallow(
      <OperatorSignIn/>
    );

    wrapper.find( 'input#cc3' ).simulate( 'change', {
      target: {value: 'parolchik'}
    } );

    expect( wrapper.state( 'password' ) ).toBe( 'parolchik' );
  } );

});
