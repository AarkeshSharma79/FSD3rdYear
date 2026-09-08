import React from 'react';

function Card({ data }) {
  return (
    <div>
      <div
        style={{
          border: '5px solid white',
          height: '500px',
          width: '250px',
          padding: '10px'
        }}
      >
        <img
          src={data.poster}
          height={250}
          width={250}
          style={{ objectFit: 'cover' }}
          alt={data.title}
        />

        <h2>Name: {data.title}</h2>
        <h2>Year: {data.year}</h2>
        <h2>Genre: {data.genre}</h2>
        <h2>Rating: ⭐ {data.rating}</h2>
        <h2>Director: {data.director}</h2>
      </div>
    </div>
  );
}

export default Card;