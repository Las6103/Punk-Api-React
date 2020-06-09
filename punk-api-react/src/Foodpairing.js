import React from "react";

function Foodpairing(props) {
  return (
    <ul>
      {props.data.map((food) => {
        return <li key={food}>{food}</li>;
      })}
    </ul>
  );
}

export default Foodpairing;
