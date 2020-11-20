/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';
import {MovieList} from './Movies.js';
import {BoatList} from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises</Text>
      <MovieList />
      <Text>GetABoat - For Sale</Text>
      <BoatList />
    </ScrollView>
  );
};
export default App;
