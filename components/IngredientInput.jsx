import { useState } from 'react';

export default function IngredientInput({ ingredients, setIngredients }) {
  const [value, setValue] = useState('');

  function addIngredient() {
    const v = value.trim().toLowerCase();
    if (!v) return;
    if (!ingredients.includes(v)) setIngredients([...ingredients, v]);
    setValue('');
  }

  function removeIngredient(item) {
    setIngredients(ingredients.filter((i) => i !== item));
  }

  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
      <label className="block mb-2 font-semibold text-gray-700">Add ingredients manually</label>
      <div className="flex gap-2 mb-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g., tomato"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={addIngredient}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Add
        </button>
      </div>

      {ingredients.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-2">
          {ingredients.map((i) => (
            <li
              key={i}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              {i}
              <button
                onClick={() => removeIngredient(i)}
                className="ml-2 text-red-500 hover:text-red-700 font-bold"
              >
                
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
