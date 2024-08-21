import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider, RecipeContext } from './context/RecipeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import About from './pages/About';
import RecipeDetail from './pages/RecipeDetail';
import Login from './components/Login';
import Register from './components/Register';
import Notification from './components/Notification';
import './App.css';

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <Router>
          <AppContent />
        </Router>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;