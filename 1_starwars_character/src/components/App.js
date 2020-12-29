import React, { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";

class App extends Component {
  // Constructor initialises state for characters to empty array (will come from fetch).
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  // Fetch data from swapi, convert to json then save the results array to state.
  componentDidMount() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          characters: data.results,
        })
      );
  }

  render() {
    return (
      // Map over array from swapi and pass each object in the array into Main component
      <div>
        <Nav />
        {this.state.characters.map((character, index) => {
          return <Main key={index} character={character} />;
        })}
      </div>
    );
  }
}

export default App;
