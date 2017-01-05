import React from 'react';
import { shallow } from 'enzyme';

import { TextInput } from '../../src/js/components/Input';


describe( 'Test Input component |', function() {

  it( 'test change value method', function() {
    var test;
    const wrapper = shallow(
      <TextInput
        label={ 'black label' }
        id={ 'black_id' }
        changeInternallyTouristInfo={ ( val1, val2 ) => {
          test = {
            val1: val1,
            val2: val2
          };
        } }
      />
    );

    wrapper.find( 'input.form-control' ).simulate( 'change', {
      target: {value: 'nirvana'}
    } );

    expect( wrapper.state( 'value' ) ).toBe( 'nirvana' );
    expect( test.val1 ).toBe( 'black_id' );
    expect( test.val2 ).toBe( 'nirvana' );
  } );

} );
