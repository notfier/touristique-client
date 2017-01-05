import React from 'react';
import { shallow } from 'enzyme';

import { TouristCardData } from '../../src/js/components/TouristCardData';


describe( 'Test Operator component |', function() {

  it( 'test changeDep method', function() {
    const wrapper = shallow(
      <TouristCardData
        changeInternallyTouristInfo={ () => {} }
        card_id={ 1 }
        created={ 'recently' }
        current_department={ 1 }
        is_active={ true }
        saveTouristCardInfo={ () => {} }
        tourist={ {} }
        departments={
          [
            {id: 1, name: 'strange', address: 'tss'},
            {id: 2, name: 'miserable', address: 'tss'}
          ]
        }
      />
    );

    wrapper.find( 'select' ).simulate( 'change', {
      target: {value: 2}
    } );

    expect( wrapper.state( 'department' ) ).toBe( 2 );
  } );

  it( 'test changeValue method', function() {
    var test;
    const wrapper = shallow(
      <TouristCardData
        changeInternallyTouristInfo={ ( val1, val2, val3 ) => {
          test = {val1: val1, val2: val2, val3: val3};
        } }
        card_id={ 1 }
        created={ 'recently' }
        current_department={ 1 }
        is_active={ true }
        saveTouristCardInfo={ () => {} }
        tourist={ {info: 'Why so serious?'} }
        departments={
          [
            {id: 1, name: 'strange', address: 'tss'},
            {id: 2, name: 'miserable', address: 'tss'}
          ]
        }
      />
    );

    // manually run this method
    wrapper.instance().changeValue('roar', 'lol');

    expect( test.val1.info ).toBe( 'Why so serious?' );
    expect( test.val2 ).toBe( 'roar' );
    expect( test.val3 ).toBe( 'lol' );
  } );

  it( 'test saveTouristCardInfo method', function() {
    localStorage.setItem( 'token', 'menthol' );
    var test;
    const wrapper = shallow(
      <TouristCardData
        changeInternallyTouristInfo={ () => {} }
        card_id={ 1 }
        created={ 'recently' }
        current_department={ 1 }
        is_active={ true }
        saveTouristCardInfo={ ( val1, val2 ) => {
          test = {val1: val1, val2: val2}
        } }
        tourist={ {info: 'sotka'} }
        departments={
          [
            {id: 1, name: 'divni', address: 'tss'},
            {id: 2, name: 'vasilko', address: 'tss'}
          ]
        }
      />
    );

    wrapper.find( 'button' ).simulate( 'click', { preventDefault() {} });

    expect( test.val1 ).toBe( 'menthol' );
    expect( test.val2.tourist.info ).toBe( 'sotka' );
  } );

});
