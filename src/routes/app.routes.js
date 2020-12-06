import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../views/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export default () => {
  return (
    <Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
};
