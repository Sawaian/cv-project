
import React, { useState, useEffect } from "react";

// companyName: 'CVS',
// position: 'Stocker',
// mainTasks: 'description',
// dateFrom: '2012 Mar',
// dateTo: '2020 Mar'

function Experience(){
    const [companyName, setCompanyName] = useState("CVS");
    const [edit, setEdit] = useState(true);
    // const [position, setPosition] = useState("Stocker");
    // const [mainTasks, setMainTasks] = useState("description");

    useEffect(() =>{

    })

    const onSubmitInfo = (e) => {
        e.preventDefault();
        // console.log("Before handleChange")
        handleChange();
    }

   const handleChange = (e) => {

    let name = {[e.target.name]: e.target.value };
    
       setCompanyName(name.value)

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
if(edit){
    console.log(edit + "forms")
        return(
            <div>
                <div>
                <form className="exp" onSubmit={onSubmitInfo}>
                            <label className="companyName"> Company </label>
                            <input
                                className="companyName"
                                onChange={handleChange}
                                placeholder="Company Name"
                                value = {companyName ?? ""}
                                type="text"
                                name="companyName"
                                required
                            />
                            <button type="submit"> Submit </button>
                            </form>
                </div>
            </div>
        )
    } 
    console.log(edit + " no forms")
        return(
            <div>
                 <p>Company Name: {companyName}</p>
                </div>

        )
    }


export default Experience;


// import React, { Component } from "react";
// import uniqid from "uniqid";
// import './Experience.css'


// class Experience extends Component {
//     constructor() {
//         super()

//         this.state = {
//             experience: ({
//                 companyName: 'CVS',
//                 position: 'Stocker',
//                 mainTasks: 'description',
//                 dateFrom: '2012 Mar',
//                 dateTo: '2020 Mar'
//             }),
//             infoArray: [],
//             edit: false,
//         }
//     }
//     handleChange = (e) => {
//         this.setState({
//             experience: ({ ...this.state.experience, [e.target.name]: e.target.value })
//         })
//     }

//     onSubmitInfo = (e) => {
//         e.preventDefault();
//         console.log(this.findDuplicate())
//         if (!this.findDuplicate()) {
//             console.log("Magic the gathering")
//             this.setState({
//                 infoArray: [...this.state.infoArray]
//             });
//         }
//         this.handleEdit()
//     }


 

//     findDuplicate = () => {
//      return this.state.infoArray.find((x) => JSON.stringify(x) === JSON.stringify(this.state.experience)) 
//     }

//     handleEdit = (e) => {
//         this.setState({
//             edit: true,
//         })
//     }

//     handleDisplay = (e) => {
//         this.setState({
//             edit: false,
//         })
//     }


//     render() {
//         const { experience, edit, infoArray } = this.state;
//         if (edit) {
//             return (
//                 <div>
//                     <button className="editBtn" onClick={this.handleDisplay}> Edit </button>
//                     {
//                         infoArray.map((info) => (
//                             <div className={info}>
//                                 <p>Company Name: {info.companyName}</p>
//                                 <p>Position: {info.position}</p>
//                                 <p>maintasks: {info.mainTasks}</p>
//                                 <p>To: {info.dateTo}</p>
//                                 <p>From: {info.dateFrom}</p>
//                             </div>
//                         )
//                         )
//                     }
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <form className="exp" onSubmit={this.onSubmitInfo}>
//                         <label className="companyName"> Company </label>
//                         <input
//                             className="companyName"
//                             onChange={this.handleChange}
//                             placeholder="Company Name"
//                             value={experience.companyName}
//                             type="text"
//                             name="companyName"
//                             required
//                         />
//                         <label htmlFor="position"> Position </label>
//                         <input
//                             className="position"
//                             onChange={this.handleChange}
//                             value={experience.position}
//                             type="text"
//                             name="position"
//                             required
//                         />
//                         <label htmlFor="dateTo"> Date To: </label>
//                         <input
//                             className="dateTo"
//                             onChange={this.handleChange}
//                             value={experience.dateTo}
//                             type="text"
//                             name="dateTo"
//                         />
//                         <label htmlFor="dateFrom"> Date From: </label>
//                         <input
//                             className="dateFrom"
//                             onChange={this.handleChange}
//                             value={experience.dateFrom}
//                             type="text"
//                             name="dateFrom"
//                         />
//                         <button className="submit" onSubmit={this.onSubmitInfo}> Add </button>
//                     </form>
//                 </div>
//             )
//         }
//     }
// }

// export default Experience;