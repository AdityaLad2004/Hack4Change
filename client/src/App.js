import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import AddProject from './components/AddProject';
import ViewProjects from './components/ViewProjects';

const App = () => {
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard role={role} />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/view-projects" element={<ViewProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
