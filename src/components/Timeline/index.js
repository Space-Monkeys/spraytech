import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';
import { Check, X } from 'react-native-feather';

export default function Timeline(props) {
  return (
    <View style={styles.BoxTimeline}>
      {props.steps.map((step) => (
        <View key={step.id} style={styles.TimelineStep}>
          <View
            style={{
              backgroundColor: step.status ? '#008847' : '#C5C0B6',
              ...styles.circle,
            }}
          >
            {step.status ? (
              <Check width={10} height={12} stroke="#FFF" />
            ) : (
              <X width={10} height={12} stroke="#FFF" />
            )}
          </View>
          <View
            style={{
              display: step.id === 5 ? 'none' : 'flex',
              ...styles.row,
              backgroundColor: step.status ? '#008847' : '#C5C0B6',
            }}
          />
        </View>
      ))}
    </View>
  );
}
