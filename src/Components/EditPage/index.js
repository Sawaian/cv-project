// import React, { Component } from "react";

// class EditText extends Component{
//     constructor(){
//         super();
//         this.state = {
//             pageLoad: true,
//         }
//     }

//     finishEdit = (e) => {
//         document.querySelector(".edit-Btn").style.display = "none";
//     }
//         render(){

//             // create a conditional render here to hide the edit page.

//             const { pageLoad } = this.state

//             if(pageLoad === true){
//                 this.finishEdit()
//             }

//             return ( 
//                 <div>
//                     <button className="edit-Btn" display="none" onClick={this.finishEdit} > Edit </button>
//                 </div>
//             )

        
//     }
// }

// export default EditText;