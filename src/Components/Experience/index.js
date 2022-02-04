import React, { useState, useEffect } from "react";

// companyName: 'CVS',
// position: 'Stocker',
// mainTasks: 'description',
// dateFrom: '2012 Mar',
// dateTo: '2020 Mar'

const Experience = () => {
    const [companyName, setCompanyName] = useState("CVS");
    const [edit, setEdit] = useState("true");
    // const [position, setPosition] = useState("Stocker");
    // const [mainTasks, setMainTasks] = useState("description");

    useEffect(() =>{

    })

    const onSubmitInfo = (e) => {
        e.preventDefault();
    }

   const handleChange = (e) => {
       setCompanyName({[e.target.name]: e.target.value })
    }

   const findDuplicate = () => {
        return companyName.find((x) => JSON.stringify(x) === JSON.stringify(companyName)) 
       };

    const handleDisplay = (e) =>{
        setEdit(false)
        };

    const handleEdit = () => {
       setEdit(true)
    }

    if(edit === true){
        return (
            <div>
                <div>
                <form className="exp" onSubmit={onSubmitInfo}>
                            <label className="companyName"> Company </label>
                            <input
                                className="companyName"
                                onChange={handleChange}
                                placeholder="Company Name"
                                value = {companyName}
                                type="text"
                                name="companyName"
                                required
                            />
                            </form>
                </div>
            </div>
        )
    } else if (edit === false){
        return(
            
        )
    }



}

export default Experience