import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing css for the tailwind
import './index.css'

// importing routes for other pages
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
