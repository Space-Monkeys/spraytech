import styles from './styles';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { X, ChevronRight, CheckCircle, XCircle } from 'react-native-feather';

export default function Inspection(props) {
  return (
    <View style={styles.InspectionBox}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: 15,
          alignItems: 'center',
        }}
      >
        <View style={styles.TopContainer}>
          <View style={styles.DescriptionHistory}>
            <View
              style={{
                backgroundColor: '#E64A3031',
                width: 40,
                height: 40,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X width={22} height={22} strokeWidth={3} stroke="#E64A30" />
            </View>
            <View style={styles.TextDescription}>
              <Text style={styles.Title}>{props.title}</Text>
              <Text style={styles.Description}>{props.description}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('StartInspection')}
          >
            <ChevronRight width={22} height={22} stroke="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemRow}>
          <Text style={styles.RowDescription}>Vazamentos</Text>
          <XCircle width={13} height={13} stroke="#E64A30" />
        </View>
        <View style={styles.ItemRow}>
          <Text style={styles.RowDescription}>Vazão das pontas</Text>
          <CheckCircle width={13} height={13} stroke="#008847" />
        </View>
        <View style={styles.ItemRow}>
          <Text style={styles.RowDescription}>Taxa de aplicação</Text>
          <XCircle width={13} height={13} stroke="#E64A30" />
        </View>
        <View style={styles.ItemRow}>
          <Text style={styles.RowDescription}>Manômetro</Text>
          <CheckCircle width={13} height={13} stroke="#008847" />
        </View>
      </View>
    </View>
  );
}
