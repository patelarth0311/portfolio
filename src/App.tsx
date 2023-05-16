import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { Routes, Route } from "react-router-dom"
import { ExperienceView } from './components/ExperienceView';
import { ProjectsView } from './components/ProjectsView';
import { MenuSideBar } from './components/MenuSideBar';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/experience" element={<ExperienceView/>}></Route>
      <Route path="/projects" element={<ProjectsView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;