import React, { useState, useEffect } from "react";

// companyName: 'CVS',
// position: 'Stocker',
// mainTasks: 'description',
// dateFrom: '2012 Mar',
// dateTo: '2020 Mar'

const Experience = () => {
    const [companyName, setCompanyName] = useState("CVS");
    // const [position, setPosition] = useState("Stocker");
    // const [mainTasks, setMainTasks] = useState("description");

    useEffect(() =>{
        const changeCompanyName = (() =>{
            if(companyName !=)
        })

    }),[companyName]

    handleChange = (e) => {
       setCompanyName({[e.target.name]: e.target.value })
    }

    findDuplicate = () => {
        return companyName.find((x) => JSON.stringify(x) === JSON.stringify(this.state.experience)) 
       }

    document.addEventListener("submit", )

    return (
        <div>
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
                        </form>
            </div>
        </div>
    )

}