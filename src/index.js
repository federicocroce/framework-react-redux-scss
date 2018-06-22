import React from 'react';
import {components} from 'react';
import ReactDOM from 'react-dom';

import './Styles/Main/index.css';

import frameworkConfig from './Config/frameworkConfig';

import registerServiceWorker from './registerServiceWorker';

frameworkConfig();

ReactDOM.render(<components.App />, document.getElementById('root'));
registerServiceWorker();
