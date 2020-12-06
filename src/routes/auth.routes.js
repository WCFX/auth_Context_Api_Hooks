import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../views/SignIn';

const { Navigator, Screen } = createStackNavigator();

export default () => {
  return (
    <Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
