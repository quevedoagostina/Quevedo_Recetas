import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem('quevedo-recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('quevedo-recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes(prevRecipes => [...prevRecipes, recipe]);
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