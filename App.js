import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Signup from './src/Signup';
import { AuthContextProvider } from './src/context/AuthContext';
import Home from './src/Home';
import Start from './src/Start';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Start" component={Start} />

      </Stack.Navigator>
    </NavigationContainer>
    </AuthContextProvider>
  );
}
