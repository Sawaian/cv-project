import React, { Component } from "react";
import uniqid from "uniqid";
import './Experience.css'


class Experience extends Component {
    constructor() {
        super()

        this.state = {
            experience: ({
                companyName: 'CVS',
                position: 'Stocker',
                mainTasks: 'description',
                dateFrom: '2012 Mar',
                dateTo: '2020 Mar'
            }),
            infoArray: [],
            edit: false,
        }
    }
        handleChange = (e) => {
            this.setState({
                experience: ({ ...this.state.experience, [e.target.name]: e.target.value })
            })
        }

        onSubmitInfo = (e) => {
            this.setState({
                infoArray: [...this.state.infoArray, this.state.experience]
            })
            this.handleEdit()
            this.checkSubmission();

        }

        checkSubmission = (e) => {
            if(this.state.experience === this.state.infoArray[0]){
                    console.log("butts")
            }
        }

        handleEdit = (e) => {
            this.setState({
                edit: true,
            })
        }

        handleDisplay = (e) => {
            this.setState({
                edit: false,
            })
        }
    

    render() {
        const { experience, edit, infoArray } = this.state;
        if (edit) {
            return (
                <div>
                    <button className="editBtn" onClick={this.handleDisplay}> Edit </button>
                    { 
                    infoArray.map((info) => (
                        <div className={info}>
                            <p>Company Name: {info.companyName}</p>
                            <p>Position: {info.position}</p>
                            <p>maintasks: {info.mainTasks}</p>
                            <p>To: {info.dateTo}</p>
                            <p>From: {info.dateFrom}</p>
                        </div>
                  )
            )
            }
            </div>
            )
            } else {
            return (
                <div>
                    <form className="exp" onSubmit={this.onSubmitInfo}>
                            <label className="companyName"> Company </label>
                            <input
                                className="companyName"
                                onChange={this.handleChange}
                                placeholder="Company Name"
                                value={experience.companyName}
                                type="text"
                                name="companyName"
                                required
                            />
                            <label htmlFor="position"> Position </label>
                            <input
                                className="position"
                                onChange={this.handleChange}
                                value={experience.position}
                                type="text"
                                name="major"
                                required
                            />
                            <label htmlFor="dateTo"> Date To: </label>
                            <input
                                className="dateTo"
                                onChange={this.handleChange}
                                value={experience.dateTo}
                                type="text"
                                name="dateTo"
                            />
                            <label htmlFor="dateFrom"> Date From: </label>
                            <input 
                                className="dateFrom"
                                onChange={this.handleChange}
                                value={experience.dateFrom}
                                type="text"
                                name="dateFrom"
                                />
                        <button className="submit" onSubmit={this.onSubmitInfo}> Add </button>
                    </form>
                </div>
            )
        }
    }
}

export default Experience;