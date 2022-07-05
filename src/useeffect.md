## useEffect

useEffect 안에 있는 함수는 한번만 실행된다.
state에 변화가 일어나서 rendering이 일어난다고 해더라도 한번만 렌더링이 발생한다.

```javascript
import React, { useEffect, useState } from "react";
import Button from "./Button.js";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Call the api..");
  }, []);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>Welcome back!</h1>
      <div>{counter}</div>
      {console.log(counter)}
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;
```

useEffect는 실행 처음에만 렌더링 할 수 있고, 그렇지 않으면 특정 keyword가 update될 때만 코드를 실행할 수 있다.

```javascript
useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
```

```
 useEffect(() => {
    console.log("i run the one time");
  }, []);
  useEffect(() => {
    console.log("I run whe 'keyword' change");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when'counter' change");
  }, [counter]);
```

ui 관점에서 보면, 새로운 데이터가 들어올 때마다 자동으로 새로고침되니 좋은 일이다.
하지만,
