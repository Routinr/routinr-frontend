import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing css for the tailwind
import './index.css'

// importing routes for other pages
import HomePage from "./views/HomePage.jsx";
import Signup from "./views/authentication/Signup.jsx";
import Login from "./views/authentication/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="signup" exact element={<Signup />} />
        <Route path="login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
