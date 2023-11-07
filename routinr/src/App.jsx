import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing css for the tailwind
import './index.css'

// importing routes for other pages
import HomePage from "./views/HomePage.jsx";
import Signup from "./views/authentication/Signup.jsx";
import Login from "./views/authentication/Login.jsx";
import Dashboard from './views/components/Dashboard';
import HelpCenter from './views/components/HelpCenter.jsx';
import Notes from './views/components/Notes.jsx';
import Sethings from './views/components/Sethings.jsx';
import Tasks from './views/components/Tasks.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/helpcenter" exact element={<HelpCenter />} />
        <Route path="/notes" exact element={<Notes />} />
        <Route path="/sethings" exact element={<Sethings />} />
        <Route path="/tasks" exact element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
