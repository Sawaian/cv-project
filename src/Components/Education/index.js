
import React, { Component } from "react";
import Overview from "../Overview";
import "./education.css";
import Display from "../Display"
import uniqid from "uniqid"

/* 
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company) */
class Education extends Component {
  constructor() {
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
      education: { ...this.state.education, id: uniqid(), [e.target.name]: e.target.value, }
    })
  }



  onSubmitInfo = (e) => {
    e.preventDefault()
    this.setState({
      infoArray: [...this.state.infoArray, this.state.education],
      education: {
        schoolName: '',
        major: '',
        years: '',
      }
    })
    this.handleEdit();
  }

  handleEdit = () => {
    this.setState({
      edit: true,
    })
    console.log("edit")
    console.log(this.schoolName)
  }

  handleDisplay = () => {
    this.setState({
      edit: false,
    })
    console.log("reddt", this.state.education.schoolName)
  }

  handleRemove = (id) => {
    this.setState({
      infoArray: this.state.infoArray.filter(info => info.id !== id)
    })
  }


  render() {

    const { education, infoArray, edit } = this.state;
    console.log("butts", infoArray, edit)
    if (edit) {
      return (
        <div>
          <button className="editButton" onClick={this.handleDisplay}> Edit </button>
          {infoArray.map((myInfo) => (
            <div>
              <p>{myInfo.schoolName}</p>
              <p>{myInfo.major}</p>
              <button onClick={() => this.handleRemove(myInfo.id)}> Remove </button>
            </div>
          ))}
        </div>
      )

    }
    else {
      return (
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
    };
  }
}




export default Education;