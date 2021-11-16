import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Register from '../screens/Register';

const { Navigator, Screen, Group } = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        <Screen name="Register" component={Register} />
      </Group>
    </Navigator>
  );
};

export default PublicRoutes;
