import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BookShelf from './BookShelf';
import App from '../App';

Enzyme.configure( { adapter: new EnzymeAdapter() } )

it('renders without crashing', () => {
  const wrapper = shallow( <App /> );
  const bookShelfComponent = wrapper.find( "[data-test='component-bookshelf']" );
  expect( bookShelfComponent.length ).toBe(1);
});
