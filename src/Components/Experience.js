import React, { Component } from "react";
/* 
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company) */
class Experience extends Component {
    constructor(){
      super();
  
      this.state = {
        education: {
          companyName: 'University.',
          position: 'film',
          duties: '',
          employedFrom: '',
        },
        userInfo: [],
      }
    }

    render(){

      const { education, userInfo } = this.state;
      return(  <div>
        <h1>{education.companyName}</h1>
        <button onClick={console.log("grateful")}>Click Me!</button>
      </div>)
    }
    
}


export default Experience;