import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
