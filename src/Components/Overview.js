import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";

// const Overview = (props) => {
//     const { myInfo } = props;

class Overview extends Component {
    constructor(props){
        super(props);
    }

render(){
    const {myInfo} = this.props;
return (
    <div>
        { myInfo.map((myInfo) =>{
            return <div className={"GeneralInfo"}>{myInfo}</div>
        })}
  
            </div>
            );
        };
}


export default Overview;