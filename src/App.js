import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import './App.scss';

import Scenery from './components/scenery';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <Provider store={store}>
        <div className="sun-rise-set">
          <Sidebar />
          <Scenery/>
        </div>
    </Provider>
  );
}

export default App;
