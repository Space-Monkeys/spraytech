import styles from './styles';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {} from 'react-native-feather';

export default function Specification(props) {
  return (
    <TouchableOpacity style={styles.BoxSpecification}>
      <Image source={props.icon} />
      <Text style={styles.TextTitle}>{props.value}</Text>
      <Text style={styles.TextDescription}>{props.description}</Text>
    </TouchableOpacity>
  );
}
