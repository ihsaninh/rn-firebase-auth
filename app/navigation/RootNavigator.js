import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from '@screens/Chat/Chat.screen';
import RoomScreen from '@screens/Room/Room.screen';
import LoginScreen from '@screens/Login/Login.screen';
import OnBoardScreen from '@screens/Onboard/Onboard.screen';
import RegisterScreen from '@screens/Register/Register.screen';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Onboard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Room" component={RoomScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
