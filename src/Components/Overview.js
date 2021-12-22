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
    <ul>
        { myInfo.map((myInfo) =>{
            return <li>{myInfo}</li>;
        })}
        <li></li>
            </ul>
            );
        };
}


export default Overview;