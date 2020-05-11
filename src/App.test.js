import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

test('renders App without crashing', () => {
  shallow(<App/>);
});
