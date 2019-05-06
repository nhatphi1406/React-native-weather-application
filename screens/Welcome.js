import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          city: "Ho Chi Minh",
          temperature: '29',
          status: 'https://www.shareicon.net/download/2016/08/18/811574_sun_512x512.png',
          humidity: '66',
          country: 'Vietnam'
        },
        {
          city: 'New York',
          temperature: '20 ',
          status: 'http://www.myiconfinder.com/uploads/iconsets/256-256-bfb78056c12f37e3298fec5c3cb5ba4c.png',
          humidity: '70',
          country: 'USA'
        },
        {
          city: 'Tokyo',
          temperature: '30',
          status: 'https://cdn.iconscout.com/icon/free/png-256/rainy-season-5-1126138.png',
          humidity: '67',
          country: 'Japan'
        },
        {
          city: 'Beijing',
          temperature: '20',
          status: 'https://www.shareicon.net/download/2016/08/18/811574_sun_512x512.png',
          humidity: '45',
          country: 'China'
        },
        {
          city: 'Sydney',
          temperature: '24',
          status: 'https://www.shareicon.net/download/2016/08/18/811574_sun_512x512.png',
          humidity: '54',
          country: 'Australia'
        },
        {
          city: 'London',
          temperature: '28',
          status: 'https://cdn.iconscout.com/icon/free/png-256/rainy-season-5-1126138.png',
          humidity: '67',
          country: 'UK'
        },
      ]
    };
  }
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Countries List',
    title: 'Countries List',
  });
  delete = (item) => {
    this.state.items.splice(this.state.items.indexOf(item), 1);
    this.setState({
      items: this.state.items
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      // <View style={styles.container}>

      //   <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigate("Login"); }}>
      //     <Text style={styles.buttonText}>Login</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigate("SignUp"); }}>
      //     <Text style={styles.buttonText}>SignUp</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigate("Content"); }}>
      //     <Text style={styles.buttonText}>Content</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.buttonContainer} onPress={() => { navigate("SetupSignUp"); }}>
      //     <Text style={styles.buttonText}>SetupSignUp</Text>
      //   </TouchableOpacity>

      // </View>
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={styles.card}>

              <View style={styles.city}>
                <Image
                  source={require('./../assets/sun.png')}
                  style={styles.paddingRight}
                />
                <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigate("Login", {
                        city: item.city,
                        temperature: item.temperature,
                        humidity: item.humidity,
                        status: item.status,
                        country: item.country
                      })
                    }}>
                    <Text style={{ marginLeft: 10 }}>{item.city}</Text>
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 10 }}>
                    {item.temperature}&#8451; {item.humidity}%
                </Text>
                </View>

              </View>

              <View style={styles.comboBtn}>
                <TouchableOpacity style={styles.delete}
                  onPress={() => this.delete(item)}>
                  <Image
                    source={require('./../assets/sync.png')}
                    style={styles.paddingRight}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete}
                  onPress={() => this.delete(item)}>
                  <Image
                    source={require('./../assets/remove.png')}
                  />
                </TouchableOpacity>
              </View>

            </View>
          }
        />
        <TouchableOpacity style={styles.button}
        >
          <Text style={{ color: 'white' }}>Add Location</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonContainer: {
//     backgroundColor: '#2980b9',
//     paddingVertical: 15,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff'
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#FFF',
//     fontWeight: '700'
//   },

//   text: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     textAlign: 'center'
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#3b79db',
  },
  card: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    alignItems: 'baseline',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  city: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comboBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paddingRight: {
    paddingRight: 2
  }
});