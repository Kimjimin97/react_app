import React, { useEffect, useState } from "react";
import Button from "./Button.js";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run the one time");
  }, []);
  useEffect(() => {
    console.log("I run whe 'keyword' change");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when'counter' and  ' keyword' change");
  }, [keyword, counter]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>Welcome back!</h1>
      <div>{counter}</div>
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;
