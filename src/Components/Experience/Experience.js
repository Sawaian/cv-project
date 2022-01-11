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

    render() {
        const { experience, edit, infoArray } = this.state;
        if (edit) {
            return (
                <div>
                    {infoArray.map((info) => {
                        <div className={info}>
                            <p>Company Name: {info.companyName}</p>
                            <p>Position: {info.position}</p>
                            <p>maintasks: {info.mainTasks}</p>
                            <p>To: {info.dateTo}</p>
                            <p>From: {info.dateFrom}</p>
                        </div>
                    })
                    }

                </div>

            )
            //show edit stuff
        }
        else {
            return (
                <div>
                    <form className="edu" onSubmit={this.onSubmitInfo}>
                        <div>
                            <label className="companyName"> School </label>
                            <input
                                className="companyName"
                                onChange={this.handleChange}
                                placeholder="Company Name"
                                value={experience.companyName}
                                type="text"
                                name="companyName"
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