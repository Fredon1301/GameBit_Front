import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { CartProvider } from './src/pages/cart/cartContext';


export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <StatusBar backgroundColor='#22404D' barStyle="light-content" />
      <Routes />
    </NavigationContainer>
    </CartProvider>
  );
}
