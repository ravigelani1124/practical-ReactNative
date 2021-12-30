import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login';
import { Routes } from '../../utils/constant';
import DashboardScreen
 from '../dashboard';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.Login} component={LoginScreen} />
                <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
