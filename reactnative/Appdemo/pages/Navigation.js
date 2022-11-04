import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppHome from './App';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import Today from './Today';
import Travel from './Travel';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={AppHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={Signup}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={Profile}
        />
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
        <Stack.Screen
          name="Today"
          options={{headerShown: false}}
          component={Today}
        />
        <Stack.Screen
          name="Travel"
          options={{headerShown: false}}
          component={Travel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
