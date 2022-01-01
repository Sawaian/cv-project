
import React, { Component } from "react";
import Overview from "../Overview";
import "./education.css";

/* 
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company) */
class Education extends Component {
    constructor(){
      super();
  
      this.state = {
        education: {
          schoolName: '',
          major: '',
          years: '',
        },
        educationHistory: [],
        edit: false,
      }
    }

    handleChange = (e) => {
      this.setState({
          education:{...this.state.education, [e.target.name]: e.target.value, }
      })
      return this.state.education;
    }
  
   
  
    onSubmitInfo = (e) => {
      e.preventDefault()
      console.log(this.state.education)
      this.setState({
        educationHistory: Object.values(this.state.education),
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
    }

    go(){
      console.log("Brent sneakers")
    }

    handleDisplay = () =>{
      this.setState({
        edit: false,
      })
      console.log("Display")
    }

   
    render(){

      const { education, educationHistory, edit } = this.state;
      
      if(edit){
       return  <div> <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                      <Overview myInfo={educationHistory} />
       
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