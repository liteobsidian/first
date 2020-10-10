import React from 'react';
import ReactDOM from 'react-dom'
import AppWithRouter from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithRouter />, div);
  ReactDOM.unmountComponentAtNode(div)
});
