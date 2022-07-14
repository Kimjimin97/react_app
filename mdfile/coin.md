```javascript
import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
      <option value= {coint.map((item,index)=> {item.name}}></option>

        <ul>
          {coin.map((item) => (
            <li>s
              {item.name}: {item.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
```
