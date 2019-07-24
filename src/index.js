import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({dsn: "https://e62e3cab06924d3facff6dae74be9878@sentry.io/1512570"});

ReactDOM.render(<App />, document.getElementById('root'));
