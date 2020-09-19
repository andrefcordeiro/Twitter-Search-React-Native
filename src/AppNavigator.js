import React from 'react'
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator></AppNavigator>
        </NavigationContainer>
    )
}