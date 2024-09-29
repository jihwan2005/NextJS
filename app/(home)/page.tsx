import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const BASE_URL = 
"https://api.themoviedb.org/3/movie";

export const API_KEY = 
"?api_key=cadc534207a9359a255c445e9ef71776";

async function getNowPlayingMovies() {
  const response = await fetch(`${BASE_URL}/now_playing${API_KEY}`);
  const json = await response.json();
  return json.results;
}

async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/popular${API_KEY}`);
  const json = await response.json();
  return json.results;
}

async function getTopRateMovies() {
  const response = await fetch(`${BASE_URL}/top_rated${API_KEY}`);
  const json = await response.json();
  return json.results;
}

async function getUpComingMovies() {
  const response = await fetch(`${BASE_URL}/upcoming${API_KEY}`);
  const json = await response.json();
  return json.results;
}

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