import React from 'react';
import RecipeForm from '../components/RecipeForm';

function AddRecipe() {
  return (
    <div className="add-recipe">
      <h1>Añadir Nueva Receta</h1>
      <RecipeForm />
    </div>
  );
}

export default AddRecipe;