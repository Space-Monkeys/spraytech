import styles from './styles';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ChevronRight } from 'react-native-feather';

export default function Vehicle() {
  return (
    <View style={styles.BoxVehicle}>
      <View>
        <Text>kuhn</Text>
        <Text>Boxer</Text>
        <Text>2000 h</Text>
        <TouchableOpacity>
          <ChevronRight width={24} height={25} fill="#40B37C" />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.VehicleImage}
          source={require('../../../assets/pulverizadores/boxer2000h.png')}
        />
      </View>
    </View>
  );
}
