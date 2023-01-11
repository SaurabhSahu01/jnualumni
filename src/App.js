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
import AddGallary from "./pages/AddGallary"
import AddEvent from "./pages/AddEvent"
import ShowGallary from "./pages/ShowGallary"
import ShowEvent from "./pages/ShowEvent"
import EventGallary from "./pages/EventGallary"

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
        <Route path="/signup" exact element={<ProtectedRoute><Signup /></ProtectedRoute>}></Route>
        <Route path="/feeds" exact element={<ProtectedRoute><Feeds /></ProtectedRoute>}></Route> 
        <Route path="/join" exact element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route> 
        <Route path="/profile" exact element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route> 
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/login" exact element={<ProtectedRoute><Login /></ProtectedRoute>}></Route> 
        <Route path="/addgallary" exact={true} element={<AddGallary />}></Route> 
        <Route path="/showgallary" exact={true} element={<ShowGallary />}></Route>
        <Route path="/addevent" exact={true} element={<AddEvent/>}></Route> 
        <Route path="/showevent" exact={true} element={<ShowEvent/>}></Route>
        <Route path="/show" exact={true} element={<EventGallary/>}></Route> 
      </Routes>
      </UserContextProvider>) : <></>}  
    </>
  );
}

export default App;
