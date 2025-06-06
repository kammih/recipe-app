import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { X } from "react-feather";
import EditRecipeForm from './EditRecipeForm';

const RecipeFull = ({ selectedRecipe, handleUnselectRecipe, handleUpdateRecipe, onUpdateForm, handleDeleteRecipe }) => {
  const [editing, setEditing] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleCancel = () => {
    setEditing(false);
  };

  if (showConfirmationModal) {
    return (
      <div className="recipe-details">
        <ConfirmationModal
         message="Are you sure? Once it's gone, it's gone." 
         onCancel={() => setShowConfirmationModal(false)} 
         onConfirm={() => handleDeleteRecipe(selectedRecipe.id)}
          />
      </div>
    );
  }

    return (
        <div className='recipe-details'>
          {editing? (
              <EditRecipeForm
               selectedRecipe={selectedRecipe}
               handleCancel={handleCancel}
               handleUpdateRecipe={handleUpdateRecipe}
               onUpdateForm={onUpdateForm}
              
              />
          ) : (
            <article>
          <header>
            <figure>
              <img alt={selectedRecipe.title} src={selectedRecipe.image_url} />
            </figure>
            <h2>{selectedRecipe.title}</h2>
            <div className='button-container'>
              <button className='edit-button' onClick={() => setEditing(true)}>
                Edit
                </button>
              <button className='cancel-button' onClick={handleUnselectRecipe}>
               <X /> Close
              </button>
              <button className='delete-button' onClick={() => setShowConfirmationModal(true)}>
                Delete
                </button>
            </div>
          </header>
      
          <h3>Description:</h3>
          <p>{selectedRecipe.description}</p>
      
          <h3>Ingredients:</h3>
      
          <ul className='ingredient-list'>
            {selectedRecipe.ingredients.split(",").map((ingredient, index) => (
                <li className='ingredient' key={index}>
                    {ingredient}
                </li>
            ))}
      
          </ul>
          <h3>Instructions:</h3>
      
          <pre className='formatted-text'>{selectedRecipe.instructions}</pre>
      
          <h3>Servings: {selectedRecipe.servings}</h3>
        </article>
          )}
        <article>
          <header>
            <figure>
              <img alt={selectedRecipe.title} src={selectedRecipe.image_url} />
            </figure>
            <h2>{selectedRecipe.title}</h2>
            <div className='button-container'>
              <button className='edit-button' onClick={() => setEditing(true)}>
                Edit
                </button>
              <button className='cancel-button' onClick={handleUnselectRecipe}>
               <X /> Close
              </button>
              <button className='delete-button' onClick={() => setShowConfirmationModal(true)}>
              Delete
              </button>
            </div>
          </header>
      
          <h3>Description:</h3>
          <p>{selectedRecipe.description}</p>
      
          <h3>Ingredients:</h3>
      
          <ul className='ingredient-list'>
            {selectedRecipe.ingredients.split(",").map((ingredient, index) => (
                <li className='ingredient' key={index}>
                    {ingredient}
                </li>
            ))}
      
          </ul>
          <h3>Instructions:</h3>
      
          <pre className='formatted-text'>{selectedRecipe.instructions}</pre>
      
          <h3>Servings: {selectedRecipe.servings}</h3>
        </article>
      </div>
    );
};

export default RecipeFull;