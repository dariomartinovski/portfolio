import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";

export default function Pages() {
  return (
    <Routes>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
