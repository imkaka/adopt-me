import React, { useState, useEffect } from "react";
import BreedForm from "./components/BreedForm";

function App() {
  const breeds = ["boxer", "pug", "akita", "pitbull"];

  const [breed, setBreed] = useState(breeds[0]);

  const [imageUrl, setImageUrl] = useState(
    "https://images.dog.ceo/breeds/boxer/n02108089_2723.jpg"
  );

  // // componentDidMount, Update
  useEffect(() => {
    const dogURL = `https://dog.ceo/api/breed/${breed}/images/random`;

    fetch(dogURL)
      .then((res) => res.json())
      .then((res) => setImageUrl(res.message));
  }, [breed]);

  return (
    <div className="container">
      <h1>Adopt Me</h1>
      <BreedForm breeds={breeds} setBreed={setBreed} />
      <img src={imageUrl} className="rounded img-fluid" />
    </div>
  );
}

export default App;
