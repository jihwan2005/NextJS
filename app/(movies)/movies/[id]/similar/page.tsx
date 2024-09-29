import { API_KEY } from "../../../../(home)/page";
import { BASE_URL } from "../../../../(home)/page";
import styles from "../../../../../styles/home.module.css";
import Movie from "../../../../../components/movie";

export default async function Similar({params}:{params:{id:string}}){
  const {id} = params;
  const response = await fetch(`${BASE_URL}/${id}/similar${API_KEY}`);
  const json = await response.json();
  const similars = json.results || [];
  return (
    <div>
      <h1 className={styles.title}>
        Similar
      </h1>
      <div className={styles.container}>
      {similars.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id} 
          poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}/>
      ))}
      </div>
    </div>
  )
}