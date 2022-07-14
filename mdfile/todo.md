```javascript
import React, { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>to do! {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo}></input>
        <button>add</button>
      </form>
      <hr />
      {todos.map()}
    </div>
  );
}
export default App;
```

## map을 활용해서 array의 하나 하나의 값들을 다시 또 하나의 array로 만들어준다.

```javascript
["3", "2", "1"].map(() => ":)");
// [':)', ':)', ':)']
```

하지만 map을 사용하면 다음과 같은 에러가 발생한다.

```
// waring : Each child in a list should have a unique "key" prop.
```

때문에 다음과 같이 코드를 넣어줬다.

```javascript
<ul>
  {todos.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```
