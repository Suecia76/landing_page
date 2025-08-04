import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Home />}></Route>
        <Route path="/faqs" element={<Questions />}></Route>
      </Routes>
    </>
  );
}

export default App;
