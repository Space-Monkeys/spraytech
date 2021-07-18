import React, { useState } from 'react';
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
let step = 0;
export default function InspectionScreen({ navigation }) {
  const [steps, setSteps] = useState([
    { status: 0, id: 0, active: true },
    { status: 0, id: 1, active: false },
    { status: 0, id: 2, active: false },
    { status: 0, id: 3, active: false },
    { status: 0, id: 4, active: false },
    { status: 0, id: 5, active: false },
  ]);

  /*  const steps = [
    { status: 1, id: 0, active: true },
    { status: 1, id: 1, active: false },
    { status: 0, id: 2, active: false },
    { status: 0, id: 3, active: false },
    { status: 0, id: 4, active: false },
    { status: 0, id: 5, active: false },
  ]; */

  const nextStep = () => {
    step = step + 1;

    let newSteps = [];
    steps.forEach((element) => {
      if (element.id === step - 1) {
        element.status = 1;
      }
      if (element.id !== step) {
        element.active = false;
        newSteps.push(element);
      } else {
        element.active = true;
        newSteps.push(element);
      }
    });
    setSteps(newSteps);
    console.log(step);
  };

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

      {steps[0].active && (
        <View style={styles.BoxSprayers}>
          <View style={styles.BoxDescription}>
            <Text style={styles.Title}>Selecione a Ponta</Text>
            <Text style={styles.Description}>
              Selecione a ponta que deseja calibrar para obter maior proveito
              durante a pulverização
            </Text>
          </View>
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
          <View style={styles.Spray}>
            <Image
              style={styles.SprayImage}
              source={require('../../../assets/sprayers/7.png')}
            />
          </View>
          <View style={styles.Spray}>
            <Image
              style={styles.SprayImage}
              source={require('../../../assets/sprayers/8.png')}
            />
          </View>
          <View style={styles.Spray}>
            <Image
              style={styles.SprayImage}
              source={require('../../../assets/sprayers/9.png')}
            />
          </View>
          {/* <View style={styles.Spray}>
          <Image
            style={styles.SprayImage}
            source={require('../../../assets/sprayers/10.png')}
          />
        </View> */}
        </View>
      )}
      {steps[1].active && (
        <View style={styles.BoxPressure}>
          <View style={styles.BoxDescription}>
            <Text style={styles.Title}>Selecione a Pressão</Text>
            <Text style={styles.Description}>
              Recomendamos calibrar as pontas com 3bar de pressão.
            </Text>
          </View>

          <Text>Teste</Text>
        </View>
      )}
      <View style={styles.ContainerBtn}>
        <TouchableOpacity style={styles.BtnSkip}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#008847' }}>
            Pular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnNext} onPress={() => nextStep()}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFF' }}>
            Avançar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
