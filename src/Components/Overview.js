import React, { Component } from "react";

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
            return <div className={myInfo}>{myInfo}</div>
        })}
  
            </div>
            );
        };
}


export default Overview;