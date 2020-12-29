import React from "react";

class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Everytime a character is typed into input, handleChange sets the event target value to the value of state.
  // name of input matches with key of state to access [e.target.value] - used incase extra inputs were to be added.
  handleChange(e) {
    const { name, value } = e.target; // react synthetic event
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Add a new Task"
            onChange={this.handleChange}
            name="userInput"
            value={this.state.userInput}
          />
        </form>
      </>
    );
  }
}

export default NewItem;
