import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import Timeline from '../../components/Timeline';
import { Plus, Minus } from 'react-native-feather';

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
  const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundColor: 'FFF',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffff',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get('window').width - 40;
  const data = {
    labels: ['Ponta 1', 'Ponta 2', 'Ponta 3', 'Ponta 4', 'Ponta 5', 'Ponta 6'],
    datasets: [
      {
        data: [0.65, 0.67, 0.62, 0.64, 0.63, 0.69],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Irregularidade nas Pontas'], // optional
  };

  const [oneSprayer, setOneSprayer] = useState('1.5');
  const [twoSprayer, setTwoSprayer] = useState('1.2');
  const [treeSprayer, setTreeSprayer] = useState('1.3');

  /*  const steps = [
    { status: 1, id: 0, active: true },
    { status: 1, id: 1, active: false },
    { status: 0, id: 2, active: false },
    { status: 0, id: 3, active: false },
    { status: 0, id: 4, active: false },
    { status: 0, id: 5, active: false },
  ]; */

  const nextStep = () => {
    if (steps !== 0) {
      step = step + 1;
    }

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
    console.log(step);
    setSteps(newSteps);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <View style={{ width: '100%' }}>
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
            <View style={styles.PressureContainer}>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure2.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  2
                </Text>
              </View>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure1.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  2,5
                </Text>
              </View>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure5.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  3
                </Text>
              </View>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure4.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  3,5
                </Text>
              </View>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure6.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  4
                </Text>
              </View>
              <View style={styles.RowPressure}>
                <Image
                  source={require('../../../assets/icons/pressure3.png')}
                />
                <Text
                  style={{ fontWeight: 'bold', fontSize: 16, marginTop: 5 }}
                >
                  4,5
                </Text>
              </View>
            </View>
          </View>
        )}
        {steps[2].active && (
          <View style={styles.BoxPressure}>
            <View style={styles.BoxDescription}>
              <Text style={styles.Title}>LIgue a máquina</Text>
              <Text style={styles.Description}>
                Ligue a máquina e aguarde 3 minutos para que a pressão
                estabilize.
              </Text>
            </View>
            <View style={styles.VehicleContainer}>
              <Image source={require('../../../assets/icons//abc.png')} />
            </View>
          </View>
        )}
        {steps[3].active && (
          <View style={styles.BoxPressure}>
            <View style={styles.BoxDescription}>
              <Text style={styles.Title}>Vazão da Ponta</Text>
              <Text style={styles.Description}>
                Verifique a vazão de cada bico em 1/min
              </Text>
            </View>
            <View style={styles.SprayContainerBody}>
              <ScrollView>
                <View style={styles.InputContainer}>
                  <Text style={styles.TextLabel}>
                    Vazão coletada 1/min da Ponta 1
                  </Text>
                  <View style={styles.ButtonContainer}>
                    <TextInput
                      keyboardType={'numeric'}
                      value={oneSprayer}
                      style={styles.Input}
                      onChangeText={(number) =>
                        setOneSprayer(number.toString())
                      }
                    />
                    <View style={styles.BtnActions}>
                      <TouchableOpacity
                        onPress={() =>
                          setOneSprayer(
                            (
                              Math.floor(parseFloat(oneSprayer) * 10) / 10 +
                              0.1
                            ).toString()
                          )
                        }
                        style={styles.plus}
                      >
                        <Plus
                          width={18}
                          height={18}
                          strokeWidth={3}
                          stroke="#008847"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          setOneSprayer(
                            (
                              Math.floor(parseFloat(oneSprayer) * 10) / 10
                            ).toString()
                          )
                        }
                        style={styles.minus}
                      >
                        <Minus
                          width={14}
                          strokeWidth={4}
                          height={14}
                          stroke="#E64A30"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.InputContainer}>
                  <Text style={styles.TextLabel}>
                    Vazão coletada 1/min da Ponta 2
                  </Text>
                  <View style={styles.ButtonContainer}>
                    <TextInput
                      keyboardType={'numeric'}
                      value={twoSprayer}
                      style={styles.Input}
                      onChangeText={(number) =>
                        setTwoSprayer(number.toString())
                      }
                    />
                    <View style={styles.BtnActions}>
                      <TouchableOpacity
                        onPress={() =>
                          setTwoSprayer(
                            (
                              Math.floor(parseFloat(twoSprayer) * 10) / 10 +
                              0.1
                            ).toString()
                          )
                        }
                        style={styles.plus}
                      >
                        <Plus
                          width={18}
                          height={18}
                          strokeWidth={3}
                          stroke="#008847"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          setTwoSprayer(
                            (
                              Math.floor(parseFloat(twoSprayer) * 10) / 10
                            ).toString()
                          )
                        }
                        style={styles.minus}
                      >
                        <Minus
                          width={14}
                          strokeWidth={4}
                          height={14}
                          stroke="#E64A30"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.InputContainer}>
                  <Text style={styles.TextLabel}>
                    Vazão coletada 1/min da Ponta 3
                  </Text>
                  <View style={styles.ButtonContainer}>
                    <TextInput
                      keyboardType={'numeric'}
                      value={treeSprayer}
                      style={styles.Input}
                      onChangeText={(number) =>
                        setTreeSprayer(number.toString())
                      }
                    />
                    <View style={styles.BtnActions}>
                      <TouchableOpacity
                        onPress={() =>
                          setTreeSprayer(
                            (
                              Math.floor(parseFloat(treeSprayer) * 10) / 10 +
                              0.1
                            ).toString()
                          )
                        }
                        style={styles.plus}
                      >
                        <Plus
                          width={18}
                          height={18}
                          strokeWidth={3}
                          stroke="#008847"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          setTreeSprayer(
                            (
                              Math.floor(parseFloat(treeSprayer) * 10) / 10
                            ).toString()
                          )
                        }
                        style={styles.minus}
                      >
                        <Minus
                          width={14}
                          strokeWidth={4}
                          height={14}
                          stroke="#E64A30"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        )}
        {steps[4].active && (
          <View style={styles.Congratulations}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
              Parabéns!😉
            </Text>
            <Text
              style={{ textAlign: 'center', fontSize: 12, color: '#6C7272' }}
            >
              Você concluiu a inspeção da Vazão das Pontas, com isso você
              garante que sua pulverização seja mais eficiênte
            </Text>
            <Image
              style={styles.GifContainer}
              source={require('../../../assets/icons/modern-farm.gif')}
            />
          </View>
        )}
      </View>

      {steps[5].active && (
        <View style={styles.ContainerCharts}>
          <View style={styles.BoxDescription}>
            <Text style={styles.Title}>Relatório</Text>
            <Text style={styles.Description}>
              Confira o relátorio completo da inspeção para verificar a Vazão
              das Pontas.
            </Text>
          </View>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            style={{
              marginTop: 20,
              borderRadius: 8,
            }}
          />
          <View
            style={{
              backgroundColor: '#FFF',
              width: '100%',
              marginTop: 20,
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ fontSize: 12, marginBottom: 12, fontWeight: 'bold' }}
            >
              Encontramos irregularidades em algumas pontas:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 10, color: '#000' }}>Ponta 5</Text>
              <Text style={{ fontSize: 10, color: '#000' }}>>0.63</Text>
              <Text style={{ fontSize: 10, color: '#E64A30' }}>
                11% de erro
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 10, color: '#000' }}>Ponta 3</Text>
              <Text style={{ fontSize: 10, color: '#000' }}>>0.62</Text>
              <Text style={{ fontSize: 10, color: '#E64A30' }}>
                12% de erro
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 10, color: '#000' }}>Ponta 4</Text>
              <Text style={{ fontSize: 10, color: '#000' }}>>0.64</Text>
              <Text style={{ fontSize: 10, color: '#E64A30' }}>
                13% de erro
              </Text>
            </View>
          </View>
        </View>
      )}

      {!steps[4].active ? (
        <View style={styles.ContainerBtn}>
          <TouchableOpacity style={styles.BtnSkip}>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', color: '#008847' }}
            >
              Pular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnNext} onPress={() => nextStep()}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFF' }}>
              Avançar
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.CongratulationsBtn}>
          <TouchableOpacity style={styles.BtnReport} onPress={() => nextStep()}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFF' }}>
              Concluir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Finish}>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', color: '#008847' }}
            >
              Ver Relatório
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {steps[5].active && (
        <View style={styles.CongratulationsBtn}>
          <TouchableOpacity
            style={styles.BtnReport}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFF' }}>
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
