import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserWidget from '../../components/UserWidget';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UserWidget />
      <Text>Home Screen</Text>
        <Button
        title="Go to Disgraca Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}