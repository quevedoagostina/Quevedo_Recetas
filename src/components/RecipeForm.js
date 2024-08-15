import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

function RecipeForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const { addRecipe } = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, description, imageUrl, recipeInstructions });
    setName('');
    setDescription('');
    setImageUrl('');
    setRecipeInstructions('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción de la receta"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        placeholder="Instrucciones de la receta"
        value={recipeInstructions}
        onChange={(e) => setRecipeInstructions(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de la imagen (opcional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Agregar Receta</button>
    </form>
  );
}

export default RecipeForm;