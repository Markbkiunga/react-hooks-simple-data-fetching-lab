/* eslint-disable react-hooks/exhaustive-deps */
// create your App component here
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => {
        setDogImage(dog.message);
        setIsLoaded(true);
        console.log(dog.message);
      });
  }, []);

  return (
    <div>
      {isLoaded ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
