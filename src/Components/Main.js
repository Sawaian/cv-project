
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo/";
import Experience from "./Experience";
import Education from "./Education";


class Main extends Component {
  constructor(){
    super();
    this.state = {GeneralInfo: false, Experience: true, Education: false}
  }
   render(){

    const main = this.state

    if(main.GeneralInfo){
      return <Experience />
    }
    if(main.Experience){
      return <Education />
    }
  return ( <GeneralInfo />
    // <>
    //    <GeneralInfo />
    //    <Experience /> 
    //    <Education /> 
    // </>
    
    );
  }
};

//when you click the edit button, it will unhide the forms and put the value of the forms input as a placeholder in the forms. 

export default Main;
