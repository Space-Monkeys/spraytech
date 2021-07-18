import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import Timeline from '../../components/Timeline';

export default function InspectionScreen({ navigation }) {
  const steps = [
    { status: 1, id: 0 },
    { status: 1, id: 1 },
    { status: 0, id: 2 },
    { status: 0, id: 3 },
    { status: 0, id: 4 },
    { status: 0, id: 5 },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <Timeline steps={steps} />
      <View style={styles.BoxDescription}>
        <Text style={styles.Title}>Selecione a Ponta</Text>
        <Text style={styles.Description}>
          Selecione a ponta que deseja calibrar para obter maior proveito
          durante a pulverização
        </Text>
      </View>
      <View style={styles.BoxSprayers}>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/1.png')}
          />
        </View>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/2.png')}
          />
        </View>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/3.png')}
          />
        </View>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/4.png')}
          />
        </View>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/5.png')}
          />
        </View>
        <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/6.png')}
          />
        </View>
      </View>
    </View>
  );
}
