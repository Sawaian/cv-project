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
      infoArray: [],
      edit: false,
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
    this.setState({
      infoArray: Object.values(this.state.myInfo),
      myInfo: {
        name: '',
        email: '',
        phone: '',
        }
      })
      this.handleEdit()
    }


    handleEdit = () => {
      this.setState({
        edit: true,
      })
      console.log("edit")
    }

    handleDisplay = () =>{
      this.setState({
        edit: false,
      })
      console.log("Display")
    }


  render() {
      const { myInfo, infoArray, edit } = this.state;

      if(edit){
        return  <div> <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                      <Overview myInfo={infoArray} />
       
               </div>
      }
      else{

    return(
      <div>
        <form type="submit" className="form-active" onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput" > Name </label>
          <input
            className ="inputField"
            placeholder ="Name"
            onChange={this.handleChange}
            value={myInfo.name}
            type="text"
            name="name"
          />
          <label htmlFor="emailInput"> Email </label>
          <input
            className ="inputField"
            onChange={this.handleChange}
            value={myInfo.email}
            type="text"
            name="email"
          />
          <label htmlFor="phoneInput"> Phone </label>
          <input
            className ="inputField"
            onChange={this.handleChange}
            value={myInfo.phone}
            type="number"
            name="phone"
          />
          <button type="submit">Add info</button>
        </form>
      </div>
      
    )
  };}
};


export default GeneralInfo;
