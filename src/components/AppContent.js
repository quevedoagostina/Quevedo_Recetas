import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import AddRecipe from '../pages/AddRecipe';
import About from '../pages/About';
import RecipeDetail from '../pages/RecipeDetail';
import Notification from './Notification';

function AppContent() {
  const { notification, clearNotification } = useContext(RecipeContext);

  return (
    <div className="App">
      <Navbar />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={clearNotification}
        />
      )}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppContent;