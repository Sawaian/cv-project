import React from "react";

const Overview = (props) => {
    const { myInfo } = props;


return (
    <ul>
        { myInfo.map((info =>{
            return <li key={info}>{info.name}</li>
            </ul>
}

export default Overview