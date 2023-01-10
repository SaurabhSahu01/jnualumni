import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import FormPage1 from "./pages/LoginForms/FormPage1";
import FormPage2 from "./pages/LoginForms/FormPage2";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { UserContextProvider } from "./context/UserContext";
import Registration from "./pages/Registration";
import AddGallary from "./pages/AddGallary";
import ShowGallary from "./pages/ShowGallary";
import AddEvent from "./pages/AddEvent";
import ShowEvent from "./pages/ShowEvent";
import EventGallary from "./pages/EventGallary";
function App() {
  return (
    <>
      <UserContextProvider>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/signup" exact={true} element={<Signup />}></Route>
        <Route path="/join" exact={true} element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact={true} element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route> 
        <Route path="/registration" exact={true} element={<ProtectedRoute><Registration /></ProtectedRoute>}></Route> 
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/login" exact={true} element={<Login />}></Route> 
        <Route path="/loginPage1" exact={true} element={<FormPage1 />}></Route> 
        <Route path="/loginPage2" exact={true} element={<FormPage2 />}></Route> 
        <Route path="/addgallary" exact={true} element={<AddGallary />}></Route> 
        <Route path="/showgallary" exact={true} element={<ShowGallary />}></Route>
        <Route path="/addevent" exact={true} element={<AddEvent/>}></Route> 
        <Route path="/showevent" exact={true} element={<ShowEvent/>}></Route>
        <Route path="/show" exact={true} element={<EventGallary/>}></Route>  
      </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
