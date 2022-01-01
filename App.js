import 'react-native-gesture-handler';
import React from 'react';
import { Root } from './src';
import { Provider } from 'react-redux';
import store from './src/store'

export default function App() {
  return (
    <Provider store={store} >
      <Root />
    </Provider>
  );
}