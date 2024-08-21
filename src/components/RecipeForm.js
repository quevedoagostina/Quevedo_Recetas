import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

function RecipeForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && instructions) {
      const newRecipe = { name, description, instructions, imageUrl };
      console.log('Enviando nueva receta:', newRecipe); 
      addRecipe(newRecipe);
      navigate('/recipes');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Añadir Nueva Receta</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la receta"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción de la receta"
        required
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instrucciones de la receta"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="URL de la imagen (opcional)"
      />
      <button type="submit">Agregar Receta</button>
    </form>
  );
}

export default RecipeForm;