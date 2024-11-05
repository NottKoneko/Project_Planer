import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FileVisualizer from './components/FileVisualizer';
import CodeSnippets from './components/CodeSnippets';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects/:projectId/files" element={<FileVisualizer />} />
        <Route path="/projects/:projectId/snippets" element={<CodeSnippets />} />
        <Route path="/projects/:projectId/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;

