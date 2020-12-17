import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    //initialise state
    this.state = {
      latitude: null,
      longitude: null,
      errorMsg: "",
      date: new Date(),
    };
  }

  // Season logic based on month and hemisphere
  getClockIcon() {
    const { latitude } = this.state;
    const month = new Date().getMonth();
    if (
      (month === 11) ||
      (5 < month && month < 9 && latitude > 0)
    ) {
      return "summer.png";
    } else if (
      (2 < month && month < 6 && latitude < 0) ||
      (8 < month && month < 12 && 0 < latitude)
    ) {
      return "autumn.png";
    } else if (
      (5 < month && month < 9 && latitude < 0) ||
      (month < 3 && latitude > 0)
    ) {
      return "winter.png";
    } else {
      return "spring.png";
    }
  }

  // Gets updated time
  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    // user setState to set the state obj value of latitude and longitude to the position coords.lat/long
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (error) => this.setState({ errorMsg: error.message })
    );
  }

  // Calls tick() min every second
  componentDidUpdate(prevState) {
    if (prevState.date !== this.state.date) {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  // Clears activity from running inbackground if go to different page
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    // destructure state
    const { latitude, longitude, errorMsg, date } = this.state;
    return (
      <div>
        <h1>Location and Time </h1>
        {/* short ciruit logic to show error msg or location */}
        {errorMsg || (
          latitude ? <h4>
            Your location is: {latitude.toFixed(2)} latitude, {longitude.toFixed(2)} longitude.
          </h4> : null
        )}
        <Clock date={date} icon={latitude ? this.getClockIcon() : null} />
      </div>
    );
  }
}

export default App;
