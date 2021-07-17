import styles from './styles';
import React from 'react';
import { View, Text, Image } from 'react-native';
 import { Bell } from "react-native-feather";

export default function UserWidget(){
    return (
        <View style={styles.WidgetBox}>
            <View >
                <Text>Bem Vindo</Text>
                <Text>Jão da Silva</Text>
            </View>
          <View style={styles.UserBox}>
              <Bell width={24} height={25} fill="#000" />
              <View>
                   <Image style={styles.userImage} source={require('../../../assets/person.jpg')} />
              </View>
          </View>
        </View>
    );
}