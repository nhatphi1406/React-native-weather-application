import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Welcome from './screens/Welcome';
import Login from './screens/detail';
import SignUp from './screens/setting'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
const stack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
          <Icon name="settings" color={tintColor} size={24} />
        }
      }
    },
    Login: { screen: Login },
  }
);
const tab = createBottomTabNavigator(
  {
    List: {
      screen: stack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Image
            source={require('./assets/home.png')}
            style={{ marginTop: 5 }}
          />
        )
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Image
            source={require('./assets/settings.png')}
            style={{ marginTop: 5 }}
          />
        )
      }
    }

  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
        marginBottom: 3
      },
      style: {
        height: 50
      },
    }
  }
)
export default createAppContainer(tab);
// const App = createStackNavigator(
//   {
//     List: { screen: stack },
//     tab: { screen: tab }
//   },

// );


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
