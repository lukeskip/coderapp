import React from 'react';
import {Provider} from 'react-redux'
import generalStyles from './styles/generalStyles';
import AppNavigation from './navigation/index'
import store from './store'

export default function App () {
  
  
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

