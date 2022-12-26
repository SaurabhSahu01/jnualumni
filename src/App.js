import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Jobs from "./pages/Jobs";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact={true} element={<Home/>}></Route>
      <Route path="/about" exact={true} element={<About/>}></Route>
      <Route path="/join" exact={true} element={<Join/>}></Route>
      <Route path="/jobs" exact={true} element={<Jobs/>}></Route>
    </Routes>
    </>
  );
}

export default App;
