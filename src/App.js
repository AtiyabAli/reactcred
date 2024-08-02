import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <h1>CRED operation with RTK</h1>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id/" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
