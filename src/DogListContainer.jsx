import { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect'; // BreedsSelectコンポーネントをインポート
import './App.css';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]); // 犬種リスト
  const [selectedBreed, setSelectedBreed] = useState('a'); // 選択中の犬種
  const [breedImages, setBreedImages] = useState([]); // 犬種画像のリスト

  // 初回表示時に犬種一覧を取得
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList); // 犬種リストをセット
      })
      .catch(error => console.error('犬種一覧の取得に失敗しました:', error));
  }, []);

  // 表示ボタンが押されたときに，その犬の画像を取得
  const fetchBreedImages = () => {
    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/16`)
        .then(response => response.json())
        .then(data => {
          setBreedImages(data.message); // 画像リストをセット
        })
        .catch(error => console.error('犬種画像の取得に失敗しました:', error));
    } else {
      setBreedImages([]); // 選択されていない場合は画像リストをクリア
    }
  };

  // 犬種が変更されたときに選択状態を更新
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div>
      <h2 className='display-description'>好きな犬種の画像を表示できます！</h2>
      <div className="breed-select-container">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          handleChange={handleBreedChange}
        />
        <button onClick={fetchBreedImages}>表示</button>
      </div>

      {/* 犬種画像を表示 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {breedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`${selectedBreed}の画像`}
            style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>

  );
};

export default DogListContainer;
