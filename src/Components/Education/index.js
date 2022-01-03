
import React, { Component } from "react";
import Overview from "../Overview";
import "./education.css";
import Display from "../Display"
import uniqid from "uniqid"

/* 
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company) */
class Education extends Component {
    constructor(){
      super();
  
      this.state = {
        education: {
          id: uniqid(),
          schoolName: '',
          major: '',
          years: '',
        },
        infoArray: [],
        edit: false,
      }
    }

    handleChange = (e) => {
      this.setState({
          education:{...this.state.education,  id: uniqid(), [e.target.name]: e.target.value, }
      })
      return this.state.education;
    }
  
   
  
    onSubmitInfo = (e) => {
      e.preventDefault()
      console.log(this.state.education)
      this.setState({
        infoArray: Object.values(this.state.education),
        education: {
          schoolName: '',
          major: '',
          years: '',
          }
        })
        this.handleEdit();
        console.log(this.state.edit)
      }

    handleEdit = () => {
      this.setState({
        edit: true,
      })
      console.log("edit")
      console.log(this.schoolName)
    }

    handleDisplay = () =>{
      this.setState({
        edit: false,
      })
      console.log("Display")
    }

   
    render(){

      const { schoolName, education, infoArray, edit } = this.state;
      
      if(edit){
       return  <div> <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                      {/* <Overview myInfo={infoArray} /> */}
                      <label htmlFor="schoolName"> School Attended </label>
                      <p>{this.state.schoolName}</p>
                      
               
       
               </div>
      }
      else {
      return(
        <div>
          <form type="submit" className="education-form" id="education" onSubmit={this.onSubmitInfo}>
            <label htmlFor="schoolName"> School Attended </label>
            <input
              onChange={this.handleChange}
              value={education.schoolName}
              type="text"
              name="schoolName"
            />
            <label htmlFor="position"> major </label>
            <input
              onChange={this.handleChange}
              value={education.major}
              type="text"
              name="major"
            />
            <label htmlFor="years"> years </label>
            <input
              onChange={this.handleChange}
              value={education.years}
              type="text"
              name="years"
            />
            <button type="submit">Add info</button>
          </form>
        </div>
      )
    };}
    }
    



export default Education;