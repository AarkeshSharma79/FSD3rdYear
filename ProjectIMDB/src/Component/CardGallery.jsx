import React from 'react'
import Card from './Card';

function CardGallery() {
    const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    director: "Frank Darabont",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime, Drama",
    rating: 9.2,
    director: "Francis Ford Coppola",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: 9.0,
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime, Drama",
    rating: 8.9,
    director: "Quentin Tarantino",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama, Romance",
    rating: 8.8,
    director: "Robert Zemeckis",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi",
    rating: 8.8,
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,
    director: "David Fincher",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi",
    rating: 8.7,
    director: "Christopher Nolan",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Action, Sci-Fi",
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  }
  
];
return (
    <div style={{display:'flex'}}>
      {movies.map((ele) => (
        <div key={ele.title}>
          <Card data={ele} />
        </div>
      ))}
    </div>
  );
}

export default CardGallery