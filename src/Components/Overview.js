import React from "react";

const Overview = (props) => {
    const { myInfo } = props;


return (
    <ul>
        { Object.entries(myInfo).map(([key, value]) => {
        return <li>{value}</li>
        })}

    </ul>
    );
}

export default Overview