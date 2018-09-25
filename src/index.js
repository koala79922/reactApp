import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './App';
// import App from './App';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
// ReactDOM.render(<BasicExample />, document.getElementById('root'));

registerServiceWorker();
