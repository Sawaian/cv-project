import React, { Component } from "react";
import Overview from "./Components/Overview";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor(){
    super();

    this.state = {
      myInfo: {
        name: '',
        email: '',
        id: uniqid(),
      },
      applicantInfo: [],
    }
  }
 
  addName = (e) => {
    this.setState({
      myInfo:{
        ...this.state.myInfo,
        name: e.target.value,
      }
    })
  }
  addEmail = (e) => {

    this.setState({
      myInfo:{...this.state.myInfo, email: e.target.value }
    })
    console.log(this.state.myInfo)
 }

  onSubmitInfo = (e) => {
    e.preventDefault()
    console.log(this.state.myInfo)
    this.setState({
      applicantInfo: Object.values(this.state.myInfo),
      myInfo: {
        name: '',
        email: '',
        id: uniqid(),
        }
      })
    }


  render() {
      const { myInfo, applicantInfo } = this.state;

    return(
      <div>
        <form type="submit" onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput"> Name </label>
          <input
            onChange={this.addName}
            value={myInfo.name}
            type="text"
            name="name"
          />
          <label htmlFor="emailInput"> Email </label>
          <input
            onChange={this.addEmail}
            value={myInfo.email}
            type="text"
            name="email"
          />
          <button type="submit">Add info</button>
        </form>
        <Overview myInfo={applicantInfo} />
      </div>
    )
  };
};


export default GeneralInfo;
