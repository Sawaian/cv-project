import React, { Component } from "react";
import Overview from "../Overview";
import "./EXP.css";
import uniqid from "uniqid"

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
          id: uniqid()
          
        },
        infoArray: [],
        edit: false,
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
   
    render(){

      const { jobs, infoArray, edit} = this.state;

      

      if(edit){
        return  <div> <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                       <Overview myInfo={infoArray} />
        
                </div>
       } else {
  
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
        </div>
      )
    };
  }
    }
    



export default Experience;