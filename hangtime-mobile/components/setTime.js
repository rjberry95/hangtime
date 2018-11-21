import React from 'react';
import {Picker, TextInput, View, StyleSheet} from 'react-native';

export default class TimeSetter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restUnit: this.props.unit
    }
  }

  updateUnit(unit) {
    this.setState({
      restUnit: unit
    })
  }

  render() {
    return (
      <View style={styles.setTime}>
          <TextInput
            placeholder="Rest Time"
            style={styles.timeInput}
          />
          <Picker
            style={styles.picker}
            selectedValue={this.state.restUnit}
            onValueChange={
              (unitValue, unitIndex) => this.updateUnit(unitValue)
            }
            >
            <Picker.Item label="Minutes" value="m"/>
            <Picker.Item label="Seconds" value="s"/>
          </Picker>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  setTime: {
    flexDirection: 'row',
  },
  timeInput: {
    flex: 2,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 15,
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 100
  }
})