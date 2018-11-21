import React from 'react';
import { View, TextInput, Text, StyleSheet, Picker } from 'react-native';
import TimeSetter from './setTime';

export default class Add extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      workout: {
        parts: [{
          exercises: [],
          restUnit: 'm'
        }]
      },
      showPicker: false
    }
  }

  updateWorkout(input){
    this.setState({
      workout: {
        ...this.state.workout,
        name: input
      }
    })
    console.log(this.state.workout);
  }

  render() {
    return (
      <View style={styles.addForm}>
        <Text style={styles.title}>New Workout</Text>
        <TextInput
          placeholder="Workout Name"
          onChangeText={(text) => this.updateWorkout(text)}
          style={styles.input}
        />
        <Text style={styles.section}>Part 1</Text>
        <TextInput
          placeholder="Part Name"
          style={styles.input}
        />
        <TimeSetter unit={this.state.workout.parts[0].restUnit}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addForm: {
    padding: 30,
    paddingTop: '20%',
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18
  },
  input: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
})
