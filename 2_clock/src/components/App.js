import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
		super(props);
		//initialise state
    this.state = {
      latitude: null,
			longitude: null,
			errorMsg: ""
		}
		
		// user setState to set the state obj value of latitude and longitude to the position coords.lat/long
		window.navigator.geolocation.getCurrentPosition(
					position => this.setState({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					}),
					error => this.setState({errorMsg: error.message})
				)
	
		}
		
		getClockIcon() {
			const {latitude} = this.state
			const month = new Date().getMonth()
			if ((month < 3 && latitude < 0) || ( (5 < month) && (month < 9) && latitude > 0)) {
				return	"summer.png"
			}	else if (((2 < month && month < 6) && latitude < 0) || ((8 < month) && (month < 12) && 0 < latitude)) {
				return	"autumn.png"
			}	else if (((5 < month) && (month < 9) && latitude < 0) || (month < 3 && latitude > 0)) {
				return	"winter.png"
			}	else {
				return "spring.png"
			}
		}

		render() {
			// destructure state
			const { latitude } = this.state
			const { longitude } = this.state 
			const { errorMsg } = this.state 
			return(
				<div>
					<h1>Location and Time </h1>
					{/* short ciruit logic to show error msg or location */}
					{errorMsg || <h4>Your location is {latitude} latitude, {longitude} longitude</h4>}
					<Clock
						date={new Date()} 
						icon={latitude ? this.getClockIcon() : null}
					/>
				</div>
			)
  }
}

export default App;
