import React, { Component } from "react";
import Overview from "./Components/Overview";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor(){
    super();

    this.state = {
      nameInfo: {
        name: '',
        id: uniqid(),
      }
    }
  }
  handleChange = (e) => {
    this.setState({
      namelInfo: {
        name: e.target.value,
        id: this.state.nameInfo.id,
      },
    })
 }

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      applicantInfo: this.state.nameInfo,
      nameInfo: {
        name: '',
        id: uniqid(),
        }
      })
    }


  render() {
      const { nameInfo, applicantInfo } = this.state;

    return(
      <div>
        <form type="submit" onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput"> Name </label>
          <input 
              onChange={this.handleChange}
              value={nameInfo.name}
              type="text" 
              id="nameInput"
              />
          <label htmlFor="emailInput"> Email</label>
          <button type="submit">Add info</button>
        </form>
        <Overview myInfo={applicantInfo} />
      </div>
    )
  };
};


export default GeneralInfo;
