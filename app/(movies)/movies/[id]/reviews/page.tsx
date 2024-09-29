import { API_KEY } from "../../../../(home)/page";
import { BASE_URL } from "../../../../(home)/page";
import styles from "../../../../../styles/movie.module.css"

export default async function Reviews({params}:{params:{id:string}}){
  const {id} = params;
  const response = await fetch(`${BASE_URL}/${id}/reviews${API_KEY}`);
  const json = await response.json();
  const reviews = json.results || [];
  return (
    <div>
      <div className={styles.reviewinfo}>
        <h1 className={styles.title}>Reviews</h1>
        <span className={styles.review_length}>{reviews.length}</span>
      </div>
      <div className={styles.container}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.user_info}>
              {review.author_details.avatar_path ? <img
              src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
              alt={`${review.author_details.name}'s avatar`}
              className={styles.avatar}
              /> : null}

              <span className={styles.username}>{review.author_details.username}</span>
          </div>
                
          <div className={styles.created_at}>{review.created_at.split("T")[0]}</div>
          <div className={styles.rating}>
            raiting : {review.author_details.rating}
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
    </div>
  )
}