import React from 'react';

const Favorite = () => {
  const favoritejokes = Object.entries(localStorage);

  return (
    <div>
      {favoritejokes.map((j) => (
        <p>{j[1]}</p>
      ))}
    </div>
  );
};

export default Favorite;
