import style from './style/style.js';
import React from 'react';
import {Text, StatusBar, View} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <StatusBar backgroundColor="darkblue" barStyle="light-content" />
        <View style={style.appbar}>
          <Text style={style.white}>My Mobile App</Text>
        </View>
      </View>
    </>
  );
};

export default App;
