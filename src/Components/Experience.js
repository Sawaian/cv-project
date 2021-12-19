import render from "dom-serializer";
import React, { Component } from "react";

class Experience extends Component {
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
        <button onClick={this.props.schoolName}>Click Me!</button>
      </div>)
    }
    
}


export default Experience;