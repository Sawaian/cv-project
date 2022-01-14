import React, { Component } from "react";
import uniqid from "uniqid";
import './Education.css'

class Education extends Component {
    constructor() {
        super()

        this.state = {
            education: { schoolName: 'Drizzt Uni', major: "Fantasy", dateOfStudy: '2015'},
            infoArray: [],
            edit: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            education: {...this.state.education, [e.target.name]: e.target.value}
        }
        )
    }

    onSubmitInfo = (e) => {
        e.preventDefault();
        if(this.state.infoArray.length !== 0){
            this.checkForDuplicates();
          }
        this.handleEdit()
        this.checkSubmission()
    }

    handleDisplay =(e) =>{
        this.setState({
            edit: false,
        })
    }

    handleEdit(){
        this.setState({
            edit: true,
        })
    }


    checkSubmission = (e) => {
        this.setState({
            infoArray: [...this.state.infoArray, this.state.education]
        })
    }

    checkForDuplicates = (e) => {
        //Iterate over array.
        console.log("check initiated")

        let info = this.state.infoArray
        
        for(let i = 0; i < info.length; i++){
            if(info[i] === this.state.education){
             console.log("dupilicate submission detected");
            }
        }
    }



    render() {

        const { education, infoArray, edit } = this.state;
        if (edit) {
            return (
                <div>
                    <button className="editButton" onClick={this.handleDisplay}> Edit </button>
                    {
                    infoArray.map((info) => (
                    <div id={info.id}>
                        <p>Name: {info.schoolName}</p>
                        <p>{info.major}</p>
                        <p>{info.dateOfStudy}</p>
                    </div>
                    )
                    
                    )
                    }
                </div>
            )
        }
        else {
            return(
                <div>
                <form className="edu" onSubmit={this.onSubmitInfo}>
             
                        <label className="school"> School </label>
                        <input
                        className="schoolInput"
                        onChange={this.handleChange}
                        placeholder = "School"
                        value = {education.schoolName}
                        type = "text"
                        name = "schoolName"
                        required
                        />
                        <label htmlFor="major"> major </label>
                        <input
                            className="majorInput"
                            onChange={this.handleChange}
                            value={education.major}
                            type="text"
                            name="major"
                            required
                        />
                        <label htmlFor="dateTo"> Date To </label>
                        <input
                            className="dateTo"
                            onChange={this.handleChange}
                            value={education.dateOfStudy}
                            type="number"
                            name="phone"
                        />
                   
                    <button type="submit">Add info</button>
                </form>
                </div>
            )
        }
    }
}

export default Education;