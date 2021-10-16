/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from "./screen/homeScreen"

import {
    StyleSheet
} from 'react-native';

const App = () => {
 
  return (
    <>
      
      <HomeScreen/>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  aghyoul: {
    fontSize: 24,
    fontWeight: '600',
    color:'#eff'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
