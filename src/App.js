import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import './App.scss';

import Scenery from './components/scenery';
import Sidebar from './components/sidebar';
import ErrorMsg from './components/ErrorMsg';

const App = () => {
  return (
    <Provider store={store}>
        <div className="sun-rise-set">
          <Sidebar />
          <Scenery />
          <ErrorMsg />
        </div>
    </Provider>
  );
}

export default App;
