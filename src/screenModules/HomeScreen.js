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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Text
        style={{
          fontSize: 24,
          color: 'blue',
          textAlign: 'center',
          marginTop: 150,
        }}>
        Welcome To React Native
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text style={{color: 'yellow', fontSize: 20}}>
          Platform:
          <Text style={{color: 'green', fontSize: 20}}> {platform}</Text>
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Image
          source={require('../Images/search.png')}
          style={[styles.imageStyle, {marginLeft: 0}]}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
          placeholderTextColor={'grey'}
        />
        <View
          style={{
            color: 'grey',
            borderWidth: 0.4,
            height: 25,
          }}
        />
        <Image
          source={require('../Images/microphone.png')}
          style={styles.imageStyle}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    flex: 1,
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
});

export default HomeScreen;
