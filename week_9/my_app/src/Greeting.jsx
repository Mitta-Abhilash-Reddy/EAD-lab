import React from "react";

// Receiving props as a parameter
function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name} 👋</h2>
      <p>{props.message}</p>
      <hr />
    </div>
  );
}

export default Greeting;
