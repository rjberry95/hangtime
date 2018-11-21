import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Add from 'hangtime/components/newWorkout'; 

export default class New extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <Add/>;
  }
}