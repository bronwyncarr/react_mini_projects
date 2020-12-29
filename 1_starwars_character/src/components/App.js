import React, { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
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
      <div>
        <Nav />
        {console.log(this.state.characters)}
        {this.state.characters.map((character, index) => {
          return <Main key={index} character={character} />;
        })}
      </div>
    );
  }
}

export default App;
