import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Detail from "./router/Detail.js";
import Home from "./router/Home.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
