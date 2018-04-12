import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class  ProfileScreen extends Component{
  constructor(props) {
    super(props)
  }
  render(){
          // const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edzxcfsadit App.js
          </Text>
          <Text style={styles.instructions}>
              bjhsdhs
          </Text>
          <TouchableOpacity onPress={() =>navigate('TabRouter')}><Text>测试界面</Text></TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
