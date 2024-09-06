// @ts-check

import React from 'react';

// @ts-ignore
export const Description = ({ dogUrl, imageUpdate }) => {
  return (
    <main>
      <button className='change-button' onClick={imageUpdate}>変更</button>
      <p className='random-description'>変更ボタンを押すと，ランダムな犬の画像が表示されます</p>
    </main>
  );
};

export default Description
