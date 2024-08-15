import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeItem from '../components/RecipeItem';

function Recipes() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="recipes">
      <h1>Nuestras Recetas</h1>
      {recipes.length === 0 ? (
        <p>No hay recetas aún. ¡Sé el primero en añadir una!</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipes;