import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import AppContent from './components/AppContent';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <AppContent />
      </Router>
    </RecipeProvider>
  );
}

export default App;