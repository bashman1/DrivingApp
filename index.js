/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/Store';

const store = configureStore();

const DrivingSchool=()=>    
<Provider store={store}>
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => DrivingSchool);
