import styles from './styles';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ChevronRight } from 'react-native-feather';
import TreeDot from '../../components/TreeDot';

export default function Vehicle(props) {
  return (
    <View style={styles.BoxVehicle}>
      <View>
        <Text style={styles.VehicleBrand}>kuhn</Text>
        <Text style={styles.VehicleName}>Boxer</Text>
        <Text style={styles.VehicleName}>2000 H</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Details')}
          style={styles.BtnNext}
        >
          <ChevronRight width={24} height={25} stroke="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
        <TreeDot />
        <Image
          style={styles.VehicleImage}
          source={require('../../../assets/pulverizadores/boxer2000h.png')}
        />
      </View>
    </View>
  );
}
