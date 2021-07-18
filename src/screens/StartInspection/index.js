import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Clock,
  Settings,
  Users,
  ChevronRight,
  X,
  Check,
} from 'react-native-feather';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';

export default function StartInspection({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <View
        style={{
          width: '100%',
        }}
      >
        <ImageBackground
          source={require('../../../assets/bgInspection.png')}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{
            borderBottomRightRadius: 18,
            borderBottomLeftRadius: 18,
          }}
        >
          <View style={styles.BoxImage}>
            <View style={styles.Chart}>
              <Image source={require('../../../assets/chart.png')} />
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              <View style={styles.BoxInfo}>
                <View
                  style={{ backgroundColor: '#7ACEFA31', ...styles.BoxIcon }}
                >
                  <Users
                    stroke="#7ACEFA"
                    strokeWidth={3}
                    width={22}
                    height={22}
                  />
                </View>
                <Text style={styles.Value}>121x</Text>
                <Text style={styles.Title}>Aplicação</Text>
              </View>
              <View style={styles.BoxInfo}>
                <View style={{ backgroundColor: '#FBE4E0', ...styles.BoxIcon }}>
                  <Settings
                    stroke="#E64A30"
                    strokeWidth={3}
                    width={22}
                    height={22}
                  />
                </View>
                <Text style={styles.Value}>25%</Text>
                <Text style={styles.Title}>Taxa de Falhas</Text>
              </View>
              <View style={styles.BoxInfo}>
                <View style={{ backgroundColor: '#FEF6EC', ...styles.BoxIcon }}>
                  <Clock
                    stroke="#F7C480"
                    strokeWidth={3}
                    width={22}
                    height={22}
                  />
                </View>
                <Text style={styles.Value}>50 min</Text>
                <Text style={styles.Title}>Tempo médio de inspeção</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.StartInspectionTitle}>
            Selecione para Inspecionar
          </Text>
          <ScrollView
            style={styles.ScrollView}
            vertical={true}
            horizontal={false}
          >
            <View style={styles.RowBox}>
              <View style={styles.RowContainer}>
                <View style={styles.LeftContent}>
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
                    <X
                      width={22}
                      height={22}
                      strokeWidth={3}
                      stroke="#E64A30"
                    />
                  </View>
                  <View style={styles.DescriptionLabel}>
                    <Text style={styles.InspectionComponent}>Vazamentos</Text>
                    <Text style={styles.InspectionStatus}>Não Iniciado</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.NavigationBtn}
                  onPress={() => navigation.navigate('Inspection')}
                >
                  <ChevronRight
                    width={22}
                    height={22}
                    strokeWidth={3}
                    stroke="#000"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.RowContainer}>
                <View style={styles.LeftContent}>
                  <View
                    style={{
                      backgroundColor: '#30E64231',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check
                      width={22}
                      height={22}
                      strokeWidth={3}
                      stroke="#28A820"
                    />
                  </View>
                  <View style={styles.DescriptionLabel}>
                    <Text style={styles.InspectionComponent}>Dosagem</Text>
                    <Text style={styles.InspectionStatus}>100% Concluído</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.NavigationBtn}
                  onPress={() => navigation.navigate('Inspection')}
                >
                  <ChevronRight
                    width={22}
                    height={22}
                    strokeWidth={3}
                    stroke="#000"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.RowContainer}>
                <View style={styles.LeftContent}>
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
                    <X
                      width={22}
                      height={22}
                      strokeWidth={3}
                      stroke="#E64A30"
                    />
                  </View>
                  <View style={styles.DescriptionLabel}>
                    <Text style={styles.InspectionComponent}>
                      Vazão das Pontas
                    </Text>
                    <Text style={styles.InspectionStatus}>Não Iniciado</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.NavigationBtn}
                  onPress={() => navigation.navigate('Inspection')}
                >
                  <ChevronRight
                    width={22}
                    height={22}
                    strokeWidth={3}
                    stroke="#000"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.RowContainer}>
                <View style={styles.LeftContent}>
                  <View
                    style={{
                      backgroundColor: '#FFB70331',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Clock
                      width={22}
                      height={22}
                      strokeWidth={3}
                      stroke="#FFB703"
                    />
                  </View>
                  <View style={styles.DescriptionLabel}>
                    <Text style={styles.InspectionComponent}>Manômetro</Text>
                    <Text style={styles.InspectionStatus}>50% Concluído</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.NavigationBtn}
                  onPress={() => navigation.navigate('Inspection')}
                >
                  <ChevronRight
                    width={22}
                    height={22}
                    strokeWidth={3}
                    stroke="#000"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.RowContainer}>
                <View style={styles.LeftContent}>
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
                    <X
                      width={22}
                      height={22}
                      strokeWidth={3}
                      stroke="#E64A30"
                    />
                  </View>
                  <View style={styles.DescriptionLabel}>
                    <Text style={styles.InspectionComponent}>
                      Taxa de Aplicação
                    </Text>
                    <Text style={styles.InspectionStatus}>Não Iniciado</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.NavigationBtn}
                  onPress={() => navigation.navigate('Inspection')}
                >
                  <ChevronRight
                    width={22}
                    height={22}
                    strokeWidth={3}
                    stroke="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
