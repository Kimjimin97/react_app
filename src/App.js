import React, { useState } from "react";
import Button from "./Button.js";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>Welcome back!</h1>
      <div>{counter}</div>
      {console.log(counter)}
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;
