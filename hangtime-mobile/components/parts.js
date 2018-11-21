import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Part extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={style.item}>{this.props.part.key}</Text>
    );
  }
}

const style = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})