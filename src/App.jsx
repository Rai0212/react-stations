// DO NOT DELETE

import { useState } from 'react'
import './App.css'
import Header from './Header';
import Description from './Description';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg");

  const imageUpdate = () => {
    setDogUrl("https://images.dog.ceo/breeds/mountain-bernese/n02107683_4402.jpg");
    console.log("dogUrl state is updated!!");
  }

  const imageRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(jsonData => {
        setDogUrl(jsonData.message);
      })
  }

  return (
    <div>
      <Header />
      <p className='introduction-description'>こちらは，犬の画像を表示するサイトです!</p>
      <DogImage imageUrl={dogUrl} />
      <Description imageUpdate={imageRandomDog} />
      <DogListContainer />
    </div>
  )
}

export default App;