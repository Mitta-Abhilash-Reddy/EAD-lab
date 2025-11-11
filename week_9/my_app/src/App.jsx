import React from "react";
import Timer from "./Timer";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Timer</h1>
      <Timer />
      <Counter/>
    </div>
  );
}

export default App;
