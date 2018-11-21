import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Timer from 'hangtime/components/timer'; 


export default class Current extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Timer seconds="12" minutes="0" hours="1"/>
    );
  }
}