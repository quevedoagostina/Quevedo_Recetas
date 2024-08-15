import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

function RecipeItem({ recipe, index }) {
  const { deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="recipe-item">
      <Link to={`/recipes/${index}`} className="recipe-link">
        {recipe.imageUrl && (
          <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
        )}
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </Link>
      <button onClick={() => deleteRecipe(index)}>Eliminar</button>
    </div>
  );
}

export default RecipeItem;