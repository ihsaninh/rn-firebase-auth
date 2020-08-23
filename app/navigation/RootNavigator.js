import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardScreen from '@app/screens/Onboard/Onboard.screen';
import LoginScreen from '@app/screens/Login/Login.screen';
import RoomScreen from '@app/screens/Room/Room.screen';
import ChatScreen from '@app/screens/Chat/Chat.screen';
import RegisterScreen from '@app/screens/Register/Register.screen';

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
