// @ts-check
import React from 'react';

// @ts-ignore
export const DogImage = ({imageUrl}) => {
  return (
    <div className='randomDogImage-container'>
      <img src={imageUrl} alt="犬の画像" />
    </div>
  );
}

export default DogImage
