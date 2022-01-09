import React, { Component } from "react";
import uniqid from "uniqid";
import './Experience.css'


class Experience extends Component {
    constructor(){
        super()

        this.state = {
            experience: ({
                companyName: 'CVS',
                position: 'Stocker',
                mainTasks: 'description',
                dateFRom: '2012 Mar',
                dateTo: '2020 Mar'
            }),
            infoArray: [],
            edit: false,
        }
    }

    render(){
        const {experience, edit} = this.state;
        if(edit){
            return(
                <div>
                    
                </div>

            )
            //show edit stuff
        }
        else {
            return(
                <div>
                <form className="edu" onSubmit={this.onSubmitInfo}>
                    <div>
                        <label className="companyName"> School </label>
                        <input
                        className="companyName"
                        onChange={experience.companyName}
                        placeholder = "Company Name"
                        value = "text"
                        name = "companyName"
                        required
                        />
                        <label htmlFor="position"> position </label>
                        <input
                            className="position"
                            onChange={this.handleChange}
                            value={experience.position}
                            type="text"
                            name="major"
                            required
                        />
                        <label htmlFor="dateTo"> Phone </label>
                        <input
                            className="dateTo"
                            onChange={this.handleChange}
                            value={education.dateOfSTudy}
                            type="number"
                            name="phone"
                        />
                    </div>
                </form>
                </div>
        }
    }
}