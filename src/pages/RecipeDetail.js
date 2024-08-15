import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe } = useContext(RecipeContext);
  const recipe = recipes[id];

  if (!recipe) {
    return <div>Receta no encontrada</div>;
  }

  const handleDelete = () => {
    deleteRecipe(Number(id));
    navigate('/recipes');
  };

  return (
    <div className="recipe-detail">
      <h1 className="page-title">{recipe.name}</h1>
      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={recipe.name} className="recipe-detail-image" />
      )}
      <h2>Descripción</h2>
      <p>{recipe.description}</p>
      <h2>Instrucciones</h2>
      <p>{recipe.recipeInstructions}</p>
      <div className="button-group">
        <Link to="/recipes" className="back-button">Volver a las recetas</Link>
        <button onClick={handleDelete} className="delete-button">Eliminar Receta</button>
      </div>
    </div>
  );
}

export default RecipeDetail;