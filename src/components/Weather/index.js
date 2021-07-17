import styles from './styles';
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Weather() {
  return (
    <View style={styles.WeatherBox}>
      <View style={styles.LeftContent}>
        <Text style={styles.Time}>Chuva Forte</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.Temperature}>22°</Text>
            <View style={styles.Description}>
              <Text style={styles.BoxInfo}>Sexta Feira, 16 de Julho</Text>
              <Text style={styles.Location}>Caratinga - MG</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.RightContent}>
        <Image
          style={styles.Cloud}
          source={require('../../../assets/clouds.png')}
        />
      </View>
    </View>
  );
}
