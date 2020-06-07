import React from "react";
import Beer from "./Beer.js";
function Beerlist(props) {
  // console.log(props.data);
  return (
    <div className="beerlist">
      {props.data.map((data) => {
        return <Beer data={data} key={data.name} />;
      })}
    </div>
  );
}

export default Beerlist;
