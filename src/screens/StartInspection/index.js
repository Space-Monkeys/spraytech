import React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function StartInspection({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}
