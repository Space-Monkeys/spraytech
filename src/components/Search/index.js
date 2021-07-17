import styles from './styles';
import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Search() {
  return (
    <TextInput
      style={styles.SearchInput}
      placeholder="Pesquisar...."
    ></TextInput>
  );
}
