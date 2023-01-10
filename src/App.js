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
import { ProfileProtectedRoute } from "./context/ProfileProtectedRoute";
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
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<ProtectedRoute><Signup/></ProtectedRoute>}></Route>
        <Route path="/feeds" exact element={<ProtectedRoute><Feeds /></ProtectedRoute>}></Route> 
        <Route path="/join" exact element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route> 
        <Route path="/profile" exact element={<ProfileProtectedRoute><ProtectedRoute><Profile /></ProtectedRoute></ProfileProtectedRoute>}></Route> 
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/login" exact element={<ProtectedRoute><Login /></ProtectedRoute>}></Route> 
      </Routes>
      </UserContextProvider>) : <></>}  
    </>
  );
}

export default App;
