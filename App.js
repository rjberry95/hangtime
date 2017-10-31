import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Part from './components/parts';
import Timer from './components/timer';


export default class App extends React.Component {

  componentWillMount() {
    let data = require('./data.json');
    this.setState({workout: data});
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>{this.state.workout.key}</Text>
        <FlatList 
          data={this.state.workout.parts}
          renderItem={({item}) =>
            <Part part={item}/>
          }/>
        {<Timer seconds="12" minutes="0" hours="1"/>}
      </View>
    );
  }
}

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
