import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { green, blue } from 'ansi-colors';

export default class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style= {styles.container}>
          <View style={{flex: 1, width: 100, height: 100, backgroundColor: 'red'}}/>
          <View style={{flex: 2, width: 100, height: 100, backgroundColor: 'green'}}/>
          <View style={{flex: 3, width: 100, height: 100, backgroundColor: 'blue'}}/>
      </View>
    );
  }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
  }
  ;
