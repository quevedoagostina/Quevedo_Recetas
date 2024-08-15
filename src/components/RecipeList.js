import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeItem from './RecipeItem';

function RecipeList() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <h2>Mis Recetas</h2>
      {recipes.length === 0 ? (
        <p>No hay recetas aún. ¡Agrega una!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;