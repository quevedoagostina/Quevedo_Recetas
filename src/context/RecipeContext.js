import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [notification, setNotification] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('quevedo-recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quevedo-recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    const newRecipe = { 
      ...recipe, 
      author: user ? user.username : 'Anónimo',
      instructions: recipe.instructions || 'No se proporcionaron instrucciones.'
    };
    console.log('Nueva receta añadida:', newRecipe); // Para depuración
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
    setNotification({ message: '¡Receta añadida con éxito!', type: 'success' });
  };

  const deleteRecipe = (index) => {
    setRecipes(prevRecipes => prevRecipes.filter((_, i) => i !== index));
    setNotification({ message: 'Receta eliminada con éxito', type: 'success' });
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <RecipeContext.Provider value={{ 
      recipes, 
      addRecipe, 
      deleteRecipe, 
      notification, 
      clearNotification 
    }}>
      {children}
    </RecipeContext.Provider>
  );
};