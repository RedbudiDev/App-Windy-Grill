/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import App from './App';
import Toast from 'react-native-toast-message';

import store from './src/redux/store/StoreConfiguration';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => (
    <Provider store={store}>
        <App />
        <Toast />
    </Provider>
));