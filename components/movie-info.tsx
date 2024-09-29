import { BASE_URL } from "../app/(home)/page";
import { API_KEY } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
import Link from "next/link";
import MovieInfoClient from "./movieInfoClient";

export async function getMovie(id: string) {
  const response = await fetch(`${BASE_URL}/${id}${API_KEY}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return ( 
    <div className={styles.container}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.poster} alt={movie.title}/>
      <MovieInfoClient movie={movie}/>
      <div className={styles.moreInfo}>
          <Link href={`/movies/${id}/similar`}>Similar</Link>
          <Link href={`/movies/${id}/reviews`}>Reviews</Link>
          <Link href={`/movies/${id}/credits`}>Credits</Link>
          <Link href={`/movies/${id}/recommendations`}>Recommendations</Link>
        </div>
    </div>
  );
}