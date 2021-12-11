import React, { Component } from "react";
import './App.css';

class GeneralInfo extends Component {
  constructor(){
    super();

    this.state = {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        id: uniqid(),
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      personalInfo: {
        name: e.target.value,
        email: e.target.value,
      }
    })
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
  
    })
  }

  render() {
      const { personalInfo } = this.state;

    return(
      <div>
        <form type="submit" onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput"> Name</label>
          <input 
              onChange={this.handleChange}
              value={personalInfo.name}
              type="text" 
              id="nameInput"
              />
          <label htmlFor="emailInput"> Email</label>
          <input
          onChange={this.handleChange}
          value={personalInfo.email}
          type="text"
          id="emailInput" 
          />
          <button type="submit">Add info</button>

        </form>

      </div>
    )

  }

}


export default App;
