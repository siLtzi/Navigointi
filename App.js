import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home Screen',
            headerRight: () => (
              <Icon
                name="arrowright"
                size={25}
                style={{ marginRight: 20, color: 'white' }}
                onPress={() => navigation.navigate('Second')}
              />
            ),
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}