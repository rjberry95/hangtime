import React from 'react';
import { TabNavigator } from 'react-navigation';
import Workouts from './pages/workouts';
import Current from './pages/current';
import New from './pages/new';


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
    },
    NewWorkout: {
      screen: New,
      navigationOptions: {
        tabBarLabel: 'Add New'
      }
    }
  },
  {
    tabBarPosition: 'bottom'
  }
);