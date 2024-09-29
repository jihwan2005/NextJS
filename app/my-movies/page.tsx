"use client"

import { useEffect, useState } from 'react';
import styles from "../../styles/my-movie.module.css";

export default function MyMovies() {
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('myMovies')) || [];
    setMyMovies(savedMovies);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>My Movies</h1>
      {myMovies.length === 0 ? (
        <p>아직 찜한 영화가 없습니다.</p>
      ) : (
        <ul className={styles.movieList}>
          {myMovies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className={styles.img}/>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <button onClick={() => removeFromMyMovies(movie.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const removeFromMyMovies = (id) => {
  const savedMovies = JSON.parse(localStorage.getItem('myMovies')) || [];
  const updatedMovies = savedMovies.filter(movie => movie.id !== id);
  localStorage.setItem('myMovies', JSON.stringify(updatedMovies));
  window.location.reload();
};