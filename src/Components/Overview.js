import React from "react";

const Overview = (props) => {
    const { myInfo } = props;


return (
    <ul>
        { myInfo.map((myInfo) =>{
            return <li>{myInfo}</li>;
        })}
        <li>item 3</li>
            </ul>
            );
        };



export default Overview