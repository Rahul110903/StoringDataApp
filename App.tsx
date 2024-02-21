/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Maincart from './components/Maincart';
import StoringData from './firebasestoring/StoringData';


function App(): JSX.Element {
  return(
      <StoringData/>
  )  
};

  
export default App;
