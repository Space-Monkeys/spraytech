import styles from './styles';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'react-native-feather';

export default function BreadCrumb() {
  return (
    <View style={styles.BoxBreadCrumb}>
      <Text style={styles.Text}>
        Foram encontrados{' '}
        <Text style={{ color: '#40B37C', fontWeight: 'bold' }}>200</Text>{' '}
        equipamentos
      </Text>
      <TouchableOpacity style={styles.BtnFilter}>
        <Text style={{ fontSize: 10 }}>Disponível</Text>
        <ChevronDown width={24} height={25} fill="#40B37C" />
      </TouchableOpacity>
    </View>
  );
}
