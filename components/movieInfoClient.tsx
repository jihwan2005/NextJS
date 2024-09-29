"use client";

import styles from "../styles/movie-info.module.css";

export default function MovieInfoClient({ movie }) {
  const saveToMyMovies = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("myMovies")) || [];
    const isMovieSaved = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id
    );
    if (!isMovieSaved) {
      savedMovies.push(movie);
      localStorage.setItem("myMovies", JSON.stringify(savedMovies));
      alert("찜한 영화에 추가되었습니다.");
    } else {
      alert("이미 찜한 영화입니다.");
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.myMovie}>
        <h1 className={styles.title}>{movie.title}</h1>
        <button onClick={() => saveToMyMovies(movie)}>찜하기</button>
      </div>
      <h3>{movie.release_date}</h3>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre.id} className={styles.genres}>
            {genre.name}
          </span>
        ))}
      </div>
      <div>
        {movie.spoken_languages.map((language) => (
          <span key={language.iso_639_1} className={styles.genres}>
            {language.name}
          </span>
        ))}
      </div>
      <span>{movie.runtime} minutes</span>
      <h3>{movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>
        Homepage &rarr;
      </a>

      <div>
        {movie.production_companies.map((com) => (
          <div key={com.id}>
            {com.name} / {com.origin_country}
            {com.logo_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${com.logo_path}`}
                className={styles.logo}
                alt={com.name}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}