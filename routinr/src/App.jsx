import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing css for the tailwind
import './index.css'

// importing routes for other pages
import HomePage from "./views/HomePage";
import Login from "./views/authentication/Login";
import Signup from "./views/authentication/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
