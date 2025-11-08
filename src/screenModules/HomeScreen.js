import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  NativeModules,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const SwiftReservation = NativeModules.SwiftReservation;
  const {restaurantName, phoneNumber, platform} =
    SwiftReservation.getConstants();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return <SafeAreaView style={{flex: 1}}></SafeAreaView>;
};
const styles = StyleSheet.create({});

export default HomeScreen;
