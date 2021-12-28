
import React from "react";
import GeneralInfo from "./Components/GeneralInfo/";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

const App = () => {
  return (
    <>
       <GeneralInfo />
       <Experience /> 
       <Education /> 
    </>
    
  );
};

//when you click the edit button, it will unhide the forms and put the value of the forms input as a placeholder in the forms. 

export default App; 