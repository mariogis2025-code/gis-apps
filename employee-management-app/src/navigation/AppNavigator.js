import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import DataKaryawanScreen from '../screens/DataKaryawanScreen';
import FormKaryawanScreen from '../screens/FormKaryawanScreen';
import AbsensiScreen from '../screens/AbsensiScreen';
import MerchandiserScreen from '../screens/MerchandiserScreen';
import SPGScreen from '../screens/SPGScreen';
import ReportScreen from '../screens/ReportScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="DataKaryawan" component={DataKaryawanScreen} />
        <Stack.Screen name="FormKaryawan" component={FormKaryawanScreen} />
        <Stack.Screen name="Absensi" component={AbsensiScreen} />
        <Stack.Screen name="Merchandiser" component={MerchandiserScreen} />
        <Stack.Screen name="SPG" component={SPGScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
