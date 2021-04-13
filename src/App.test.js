import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person/Person';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Person component renders without crashing', () => {
  const person = document.createElement('div');
  ReactDOM.render(<Person value={'Bob'} age={26} onChange={console.log('changed')} />, person);
  ReactDOM.unmountComponentAtNode(person);
});
