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
하지만, 모든 코드가 실행될 필요는 없다.

## clena up function (클린업 함수)

우리는 component를 create할 때 렌더링이 일어난다.
destory할 때도 function 을 작동시키고자 한다.

버튼 클릭시, created :) , destroyed :(, created :) 메세지가 3개가 등장하였습니다.
이유는 index.js의 React.StricMode 가 활성화 되어 있어서네요.
급하게 강의를 따라하느라 끄라고 했었는지는 기억이 잘 나지 않지만 혹시 저와 같이 함수가 두번 실행되는 경우 (double invoke)가 발생하면 위의 코드를 주석처리 하시면 될것 같습니다.

stricmode의 경우, 개발 과정중 안전을 위해 켜는 기능이며 배포시에 자동으로 해제된다고 합니다.

| state는 직접적으로 수정할 수 없다.

```javascript
const onSubmit = (event) => {
  event.preventDefault();
  if (toDo === "") {
    return;
  }
  setTodos((currentArray) => [toDo, ...currentArray]);
  setTodo("");
  console.log(toDos);
};
```

이벤트 함수가 끝나야 state가 수정된다.

Because the function has not finished, when `onChange` finishes the state will be modified.

자바스크립에서 useState 변경하기

```javascript
import React, { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to do {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo}></input>
        <button>add to do</button>
      </form>
    </div>
  );
}

export default App;
```
