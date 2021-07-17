import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
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
      <ScrollView style={styles.ScrollView} horizontal={false}>
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
      </ScrollView>
    </View>
  );
}
