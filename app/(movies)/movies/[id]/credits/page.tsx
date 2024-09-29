import { API_KEY } from "../../../../(home)/page";
import { BASE_URL } from "../../../../(home)/page";
import styles from "../../../../../styles/movie.module.css"

export default async function Reviews({params}:{params:{id:string}}){
  const {id} = params;
  const response = await fetch(`${BASE_URL}/${id}/credits${API_KEY}`);
  const json = await response.json();
  const credits = json.cast || [];
  return (
    <div>
      <h1 className={styles.title}>Cast</h1>
      <div className={styles.container}>
        {credits.map((actor) => (
          <div key={actor.id} className={styles.actor}>
            <img 
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
            alt={actor.name} 
            className={styles.profile} 
            />
            <div>
              <p className={styles.name}>Name: {actor.original_name}</p>

              <p className={styles.gender}>
                {actor.gender === 1 ? "female" : "male"}
              </p>
              
              <p>Character: {actor.character}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}