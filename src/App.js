import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import app from './firebaseConfig.js';
import {UserAuthContextProvider} from "./reactHooks/UseAuthContext";
import {ProtectedRoute} from  "./reactHooks/ProtectedRoute";

function App() {
  return (
    <>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/join" exact={true} element={<ProtectedRoute><Join /></ProtectedRoute>}></Route>
        <Route path="/jobs" exact={true} element={<ProtectedRoute><Jobs /></ProtectedRoute>}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
      </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
