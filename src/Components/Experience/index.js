import React, { Component } from "react";
import Overview from "../Overview";

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
        jobHistory: [],
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
        jobHistory: Object.values(this.state.jobs),
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
      console.log("this")
      // this.createEditButton();
    }

   
    render(){

      const { jobs, jobHistory } = this.state;
  
      return(
        <div>
          <form type="submit" className="experience-form" id="blue" onSubmit={this.onSubmitInfo}>
            <label htmlFor="companyName"> Company </label>
            <input
              onChange={this.handleChange}
              value={jobs.name}
              type="text"
              name="companyName"
            />
            <label htmlFor="position"> Job Title </label>
            <input
              onChange={this.handleChange}
              value={jobs.email}
              type="text"
              name="position"
            />
            <button type="submit">Add info</button>
            <label htmlFor="Duties"> Duties </label>
            <input
              onChange={this.handleChange}
              value={jobs.phone}
              type="text"
              name="duties"
            />
            <button type="submit">Add info</button>
          </form>
          <Overview myInfo={jobHistory} />
        </div>
      )
    };
    }
    



export default Experience;