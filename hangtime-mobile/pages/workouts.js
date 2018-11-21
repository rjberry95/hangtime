import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Part from 'hangtime/components/parts';

export default class Workouts extends React.Component {
  componentWillMount() {
    let data = require('hangtime/data.json');
    this.setState({workout: data});
  }

  constructor(props) {
    super(props);
    this.state = {realm: null};
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.workout.key}</Text>
        <FlatList 
          data={this.state.workout.parts}
          renderItem={({item}) =>
            <Part part={item}/>
          }/>
      </View>
    );
  }
}

// const Realm = require('realm');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
  },
  title: {
    fontSize: 26,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});