import React from "react";

const Overview = (props) => {
    const { myInfo } = props;


return (
    <ul>
        {myInfo.value((value) => {
            return <li>{value.name }</li>
        })}
    </ul>
    );
}

export default Overview