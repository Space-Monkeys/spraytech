import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';

export default function TreeDot() {
  return (
    <View style={styles.BoxDots}>
      <View style={styles.Dot}></View>
      <View style={styles.Dot}></View>
      <View style={styles.Dot}></View>
    </View>
  );
}
