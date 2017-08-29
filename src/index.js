import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import data to use
import {spellData} from './data/spellData.js';

ReactDOM.render(<App spellData={spellData}/>, document.getElementById('root'));
registerServiceWorker();
