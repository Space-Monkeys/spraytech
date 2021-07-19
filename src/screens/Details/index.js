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
import { NavigationContainer } from '@react-navigation/native';

export default function DetailsScreen({ navigation }) {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('StartInspection')}
        style={styles.BtnInspection}
      >
        <View>
          <Text style={styles.TextButton}>INICIAR</Text>
          <Text style={styles.TextButton}>INSPEÇÃO</Text>
        </View>
        <AlertTriangle width={24} stroke="#FFF" height={25} />
      </TouchableOpacity>
      <ScrollView
        style={styles.ScrollViewVertical}
        horizontal={false}
        vertical={true}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.ContainerDetails}>
            <View style={styles.RightContent}>
              <Text>Odômetro</Text>
              <Text style={{ fontWeight: 'bold' }}>200km</Text>
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
            showsHorizontalScrollIndicator={false}
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
              description={'Altura máxima da Barra '}
              icon={require('../../../assets/icons/height.png')}
              value={'2M'}
            />
            <Specification
              description={'Comprimento da Barra'}
              icon={require('../../../assets/icons/width.png')}
              value={'24M'}
            />
            <Specification
              description={'Espaçamento entre os bicos'}
              icon={require('../../../assets/icons/bar-distance.png')}
              value={'50CM'}
            />
          </ScrollView>
        </View>
        <View style={styles.InspectionHistory}>
          <Text style={styles.HistoryTitle}>Hístorico</Text>
          <View>
            <Inspection
              navigation={navigation}
              title={'Troca de Bicos'}
              description={'3 bicos alterados'}
              icon={2}
            />
            <Inspection
              navigation={navigation}
              title={'Inspeção'}
              description={'Nenhum defeito encontrado'}
              icon={4}
            />
            <Inspection
              navigation={navigation}
              title={'Inspeção'}
              description={'5 defeitos encontrados'}
              icon={3}
            />

            <Inspection
              navigation={navigation}
              title={'Inspeção'}
              description={'8 defeitos encontrados'}
              icon={1}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
