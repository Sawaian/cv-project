import React, { Component } from "react";



class Education extends Component {
    constructor(){
      super();
  
      this.state = {
        education: {
          schoolName: 'University.',
          major: 'film',
          years: '',
        },
        applicantInfo: [],
      }
    }

    render(){
      return(  <div>
        <h1>{this.props.major}</h1>
        <button onClick={console.log("grateful")}>Click Me!</button>
      </div>)
    }
    
}


export default Education;