import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { AlertTriangle } from 'react-native-feather';
import Specification from '../../components/Specification';
import Inspection from '../../components/Inspection';

export default function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <View style={styles.VehicleDetail}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/pulverizadores/boxer2000hFull.png')}
        />
      </View>
      <TouchableOpacity style={styles.BtnInspection}>
        <View>
          <Text style={styles.TextButton}>INICIAR</Text>
          <Text style={styles.TextButton}>INSPEÇÃO</Text>
        </View>
        <AlertTriangle width={24} stroke="#FFF" height={25} />
      </TouchableOpacity>
      <ScrollView horizontal={false} vertical={true}>
        <View>
          <View style={styles.ContainerDetails}>
            <View style={styles.RightContent}>
              <Text>Odômetro</Text>
              <Text style={{ fontWeight: 'bold' }}>200h</Text>
            </View>
            <View style={styles.CenterContent}>
              <Text>Status</Text>
              <View style={styles.TagStatus}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 10, color: '#ffb703' }}
                >
                  Ocioso
                </Text>
              </View>
            </View>
            <View style={styles.LeftContent}>
              <Text>Última Inspeção</Text>
              <Text style={{ fontWeight: 'bold' }}>3 dias</Text>
            </View>
          </View>
        </View>
        <Text style={styles.SpecsText}>Especificações</Text>
        <View style={styles.ScrollView}>
          <ScrollView
            style={styles.ScrollView}
            horizontal={true}
            vertical={false}
          >
            <Specification
              description={'Tanque de Pulverização'}
              icon={require('../../../assets/icons/fertilizer_tank.png')}
              value={'2.000L'}
            />
            <Specification
              description={'Potência do Motor '}
              icon={require('../../../assets/icons/engine_motor.png')}
              value={'190CV'}
            />
            <Specification
              description={'Teste'}
              icon={require('../../../assets/icons/engine_motor.png')}
              value={'190CV'}
            />
            <Specification
              description={'Teste'}
              icon={require('../../../assets/icons/engine_motor.png')}
              value={'190CV'}
            />
          </ScrollView>
        </View>
        <View>
          <Text>Hístorico</Text>
          <View>
            <Inspection />
            <Inspection />
            <Inspection />
            <Inspection />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
