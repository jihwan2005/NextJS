import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRateMovies,
  getUpComingMovies,
} from "../(home)/api";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const nowplayings = await getNowPlayingMovies();
  const populars = await getPopularMovies();
  const toprates = await getTopRateMovies();
  const upcomings = await getUpComingMovies();
  return (
    <div>
      <h1 className={styles.title}>
        Now Playing
      </h1>
      <div className={styles.container}>
      {nowplayings.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id} 
          poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}/>
      ))}
      </div>

      <h1 className={styles.title}>
        Popular
      </h1>
      <div className={styles.container}>
      {populars.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id} 
          poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}/>
      ))}
      </div>

      <h1 className={styles.title}>
        Top Rate
      </h1>
      <div className={styles.container}>
      {toprates.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id} 
          poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}/>
      ))}
      </div>

      <h1 className={styles.title}>
        UpComing
      </h1>
      <div className={styles.container}>
      {upcomings.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id} 
          poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}/>
      ))}
      </div>
    </div>
  );
}