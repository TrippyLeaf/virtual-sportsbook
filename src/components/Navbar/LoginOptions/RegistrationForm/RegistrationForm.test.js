import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';

it('RegistrationForm renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});