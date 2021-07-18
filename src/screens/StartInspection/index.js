import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';

export default function StartInspection({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <View
        style={{
          width: '100%',
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          backgroundColor: '#7159c1',
        }}
      >
        <ImageBackground
          source={require('../../../assets/bgInspection.png')}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{
            borderBottomRightRadius: 18,
            borderBottomLeftRadius: 18,
          }}
        >
          <View style={styles.BoxImage}>
            <Text>Hello</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
