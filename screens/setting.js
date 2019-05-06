import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';

export default class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'SignUp',
    title: 'SignUp',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'purple', marginBottom: 30 }}>
          WEATHER
            </Text>
        <Text style={{ fontSize: 25, color: 'black' }}>
          Temperature:
            </Text>
        <Text style={{ fontSize: 20, color: 'gray', marginBottom: 20 }}>
          Current information:  &#176; C
            </Text>
        <Text style={{ fontSize: 25, color: 'black' }}>
          Netword refresh:
            </Text>
        <Text style={{ fontSize: 20, color: 'gray', marginBottom: 20 }}>
          Current information: Real-time
            </Text>
        <Text style={{ fontSize: 30, color: 'purple', marginBottom: 30 }}>
          ABOUT
            </Text>
        <Text style={{ fontSize: 20, color: 'gray', marginBottom: 20 }}>
          Instructor
            </Text>
      </View >

    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  },
  tempInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      width: '100%',
      textAlign:'center'
  }
})