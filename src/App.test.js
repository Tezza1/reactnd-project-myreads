import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

Enzyme.configure( { adapter: new EnzymeAdapter() } )

/*const setup = ( props = {}, state = null ) => {
  const wrapper = shallow( <App { ...props } /> )
  if ( state ) wrapper.setState( state );
  return wrapper;
};


const findByTestAttr = ( wrapper, val ) => {
  return wrapper.find( `[data-test="${val}"]` );
}*/


it('renders without crashing', () => {
  const wrapper = shallow( <App /> );
  const appComponent = wrapper.find( "[data-test='component-app']" );
  expect( appComponent.length ).toBe(1);
});


