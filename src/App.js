import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feeds from "./pages/Feeds";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { UserContextProvider } from "./context/UserContext";

function App() {
  const [welcomeLoading, setwelcomeLoading] = useState(true);
  const preLoader = document.getElementById("preLoader");
  useEffect(() => {
    setTimeout(() => {
      setwelcomeLoading(false);
      preLoader.style.display = "none";
    }, 1500);
  })
  return (
    <> 
      {(!welcomeLoading) ? (<UserContextProvider>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/signup" exact={true} element={<Signup />}></Route>
        <Route path="/feeds" exact={true} element={<ProtectedRoute><Feeds /></ProtectedRoute>}></Route> 
        <Route path="/join" exact={true} element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact={true} element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route> 
        <Route path="/profile" exact={true} element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route> 
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/login" exact={true} element={<Login />}></Route> 
      </Routes>
      </UserContextProvider>) : <></>}  
    </>
  );
}

export default App;
