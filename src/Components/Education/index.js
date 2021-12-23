
import React, { Component } from "react";
import Overview from "../Overview";

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
        this.removeDisplay()
      }


    removeDisplay = () =>{
      document.querySelector(".education-form").style.display = "none";
      console.log("this")
      // this.createEditButton();
    }

   
    render(){

      const { education, educationHistory } = this.state;
  
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
            <label htmlFor="years"> yeaers </label>
            <input
              onChange={this.handleChange}
              value={education.years}
              type="text"
              name="years"
            />
            <button type="submit">Add info</button>
          </form>
          <Overview myInfo={educationHistory} />
        </div>
      )
    };
    }
    



export default Education;