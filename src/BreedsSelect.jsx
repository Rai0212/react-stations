// @ts-check
// @ts-ignore
import React from 'react';

// @ts-ignore
export const BreedsSelect = ({ breeds, selectedBreed, handleChange}) => {
  return (
    <div className='breeds-select-container'>
      <label htmlFor="breed-select">犬種を選択してください: </label>
      <select id="breed-select" value={selectedBreed} onChange={handleChange}>
        <option value="" disabled />
        {breeds.map((
// @ts-ignore
        breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BreedsSelect
