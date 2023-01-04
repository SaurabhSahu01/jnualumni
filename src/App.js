import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <>
      <UserContextProvider>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/signup" exact={true} element={<Signup />}></Route>
        <Route path="/join" exact={true} element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact={true} element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route> 
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/login" exact={true} element={<Login />}></Route> 
      </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
