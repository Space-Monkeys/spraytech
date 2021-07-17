import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function HomeStack() {

    return( 
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{
          headerShown:false
        }}/>
     {/*  <Stack.Screen name="AddTransationReview" component={AddTransationReview} options={{
        headerShown:false
      }} /> */}
   {/*      <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    );
}