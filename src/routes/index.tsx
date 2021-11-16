import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import PublicRoutes from './public.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
};

export default Routes;
