import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Detail'
    }
  };

  render() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', 'no information');
    const status = navigation.getParam('status', 'no information');
    const country = navigation.getParam('country', 'no information');
    const temperature = navigation.getParam('temperature', 'no information');
    const humidity = navigation.getParam('humidity', 'no information');
    const statusImage = `./../assets/${status}.png`;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          {city}
        </Text>
        <Text style={{ marginBottom: 30 }}>
          {country}
        </Text>
        <Image
          style={{ marginBottom: 30, width: 80, height: 80 }}
          source={{ uri: status }}
        // source={{uri: this.state.avatar}}
        />
        <View style={styles.tempInfo}>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {temperature}
            </Text>
            <Text >
              Temperature
                  </Text>
          </View>
          <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {humidity}%
                  </Text>
            <Text>
              Humidity
                  </Text>
          </View>
        </View>
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
    textAlign: 'center'
  }
})