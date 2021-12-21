import React from "react";

const Overview = (props) => {
    const { myInfo } = props;


return (
    <ul>
        { myInfo.map((myInfo) =>{
            return <li>{myInfo}</li>;
        })}
        <li></li>
            </ul>
            );
        };



export default Overview