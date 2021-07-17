import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserWidget from '../../components/UserWidget';
import styles from './styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 40 }}>
      <UserWidget />
     
    </View>
  );
}