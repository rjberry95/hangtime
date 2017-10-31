import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Part from './components/parts';
import Timer from './components/timer';
import { TabNavigator } from 'react-navigation';
import Workouts from './pages/workouts'
import Current from './pages/current';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Nav/>;
  }
}

const Nav = TabNavigator(
  {
    CurrentWorkout: {
      screen: Current,
      navigationOptions: {
        tabBarLabel: 'Current Workout'
      }
    },
    AllWorkouts : {
      screen: Workouts,
      navigationOptions: {
        tabBarLabel: 'All Workouts'
      }
    }
  },
  {
    tabBarPosition: 'bottom'
  }
)
