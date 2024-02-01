import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './InitialStack';

const Router = () => {
  // main return:
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}

export default Router;