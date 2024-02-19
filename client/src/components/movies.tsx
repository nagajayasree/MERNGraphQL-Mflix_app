import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../queries/getMovies';

function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.movies.map(({ id, title, year, poster }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{year}</p>
      {/* <img src={poster} alt={id} width="50px" height="50px" /> */}
    </div>
  ));
}

export default Movies;