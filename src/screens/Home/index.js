import React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserWidget from '../../components/UserWidget';
import Weather from '../../components/Weather';
import styles from './styles';
import Search from '../../components/Search';
import BreadCrumb from '../../components/BreadCrumb';
import Vehicle from '../../components/Vehicle';

export default function HomeScreen({ navigation }) {
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
      <UserWidget />
      <Weather />
      <View style={styles.SearchContainer}>
        <Text style={{ marginBottom: 10 }}>Pesquisar Veículos:</Text>
        <Search />
      </View>

      <BreadCrumb />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
      >
        <Vehicle
          navigation={navigation}
          brand={'New Holland'}
          name={'Defensor'}
          model={'2500H'}
          image={require('../../../assets/pulverizadores/new-holland.png')}
        />
        <Vehicle
          navigation={navigation}
          brand={'John Deere'}
          name={'See & Spray'}
          model={'400 Series'}
          image={require('../../../assets/pulverizadores/john-deere.png')}
        />
        <Vehicle
          navigation={navigation}
          brand={'Massey Ferguson'}
          name={'Di Maha'}
          model={'1035'}
          image={require('../../../assets/pulverizadores/harvester.png')}
        />
        <Vehicle
          navigation={navigation}
          brand={'kuhn'}
          name={'Boxer'}
          model={'2500H'}
          image={require('../../../assets/pulverizadores/boxer2000h.png')}
        />
      </ScrollView>
    </View>
  );
}
