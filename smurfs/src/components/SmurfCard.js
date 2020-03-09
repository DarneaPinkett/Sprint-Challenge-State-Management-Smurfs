import React from "react";

const SmurfCard = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default SmurfCard;