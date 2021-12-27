import React, { Component } from "react";
import Overview from "../Overview";
import "./GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(){
    super();

    this.state = {
      myInfo: {
        name: '',
        email: '',
        phone: '',
      },
      applicantInfo: [],
    }
  }

 
  handleChange = (e) => {
    this.setState({
      myInfo:{
        ...this.state.myInfo,
        [e.target.name]: e.target.value,
      }
    })
    return this.state.myInfo;
  }

 

  onSubmitInfo = (e) => {
    e.preventDefault()
    console.log(this.state.myInfo)
    this.setState({
      applicantInfo: Object.values(this.state.myInfo),
      myInfo: {
        name: '',
        email: '',
        phone: '',
        }
      })
      this.removeDisplay()
    }


    removeDisplay = () =>{
      document.querySelector(".form-active").style.display = "none";
      console.log("this")
      this.createEditButton();
    }

    createEditButton = () =>{
      document.querySelector(".edit-Btn").style.display = "flex";
    }


  render() {
      const { myInfo, applicantInfo } = this.state;

    return(
      <div>
        <form type="submit" className="form-active" id="blue" onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput"> Name </label>
          <input
            onChange={this.handleChange}
            value={myInfo.name}
            type="text"
            name="name"
          />
          <label htmlFor="emailInput"> Email </label>
          <input
            onChange={this.handleChange}
            value={myInfo.email}
            type="text"
            name="email"
          />
          <button type="submit">Add info</button>
          <label htmlFor="phoneInput"> Phone </label>
          <input
            onChange={this.handleChange}
            value={myInfo.phone}
            type="number"
            name="phone"
          />
          <button type="submit">Add info</button>
        </form>
        <Overview myInfo={applicantInfo} />
        <div>
                    <button className="edit-Btn" display="none" onClick={this.finishEdit} > Edit </button>
                </div>
      </div>
      
    )
  };
};


export default GeneralInfo;
