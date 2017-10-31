import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoursLeft: +this.props.hours || 0,
      minutesLeft: +this.props.minutes || 0,
      secondsLeft: +this.props.seconds || 0,
    }
  }

  componentWillUnmount() {
    this.done(this._interval);
  }

  done(interval) {
    clearInterval(interval)
    delete this._interval
  }

  start() {
    !this.state.duration ? 
    this.setState({duration: (this.props.hours * Math.pow(60, 2)) + (this.props.minutes * 60) + +this.props.seconds}) :
    this.setState({duration: ((this.state.hoursLeft * Math.pow(60, 2)) + (this.state.minutesLeft * 60) + this.state.secondsLeft)})

    if (!this._interval) {
      this._interval = setInterval(() => {
        if (this.state.duration == 0) {
          this.done(this._interval);
        } else {
          let mins = parseInt(this.state.duration / 60);
          if (this.state.hoursLeft) {
            mins = mins % 60;
          }
          this.setState({hoursLeft: Math.floor(parseInt(this.state.duration / 3600))})
          this.setState({minutesLeft: mins});
          this.setState({secondsLeft: parseInt(this.state.duration % 60)})

          this.state.duration--;
        }
      }, 1000);
    }
  }

  reset() {
    this.done(this._interval);
    this.setState({
      minutesLeft: +this.props.minutes,
      secondsLeft: +this.props.seconds,
      hours: +this.props.hours
    });
  }

  render() {
    return (
      <View style={styles.timerView}>
        <View style={styles.timer}>
          <Text style={{textAlign: 'center'}}>{this.state.hoursLeft < 10 ? `0${this.state.hoursLeft}` : this.state.hoursLeft}:</Text>
          <Text style={{textAlign: 'center'}}>{this.state.minutesLeft < 10 ? `0${this.state.minutesLeft}` : this.state.minutesLeft}:</Text>
          <Text style={{textAlign: 'center'}}>{this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft}</Text>
        </View>
        <View style={styles.button}>
          <Button 
            onPress={() => this.start()}
            title="Start"
          />
          <Button 
            onPress={() => this.done(this._interval)}
            title="Stop"
          />
        </View>
        <Button
          onPress={() => this.reset()}
          title="Reset"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
  }
})