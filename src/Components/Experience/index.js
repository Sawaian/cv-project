import React, { Component } from "react";
import Overview from "../Overview";
import "./EXP.css";

/* 
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company) */
class Experience extends Component {
    constructor(){
      super();
  
      this.state = {
        jobs: {
          companyName: 'University.',
          position: 'film',
          duties: '',
          employedFrom: '',
        },
        infoArray: [],
      }
    }

    handleChange = (e) => {
      this.setState({
        jobs:{...this.state.jobs, [e.target.name]: e.target.value, }
      })
      return this.state.jobs;
    }
  
   
  
    onSubmitInfo = (e) => {
      e.preventDefault()
      console.log(this.state.jobs)
      this.setState({
        infoArray: Object.values(this.state.jobs),
        jobs: {
          companyName: '',
          position: '',
          duties: '',
          }
        })
        this.removeDisplay()
      }


    removeDisplay = () =>{
      document.querySelector(".experience-form").style.display = "none";
      // this.createEditButton();
    }

   
    render(){

      const { jobs, infoArray } = this.state;
  
      return(
        <div>
          <form type="submit" className="experience-form" id="experience" onSubmit={this.onSubmitInfo}>
            <label htmlFor="companyName"> Company </label>
            <input
              className ="inputField"
              onChange={this.handleChange}
              value={jobs.companyName}
              type="text"
              name="companyName"
            />
            <label htmlFor="position"> Job Title </label>
            <input
              className ="inputField"
              onChange={this.handleChange}
              value={jobs.position}
              type="text"
              name="position"
            />
            <label htmlFor="Duties"> Duties </label>
            <input
              className ="inputField"
              onChange={this.handleChange}
              value={jobs.duties}
              type="text"
              name="duties"
            />
            <button type="submit">Add info</button>
          </form>
          <Overview myInfo={infoArray} />
        </div>
      )
    };
    }
    



export default Experience;