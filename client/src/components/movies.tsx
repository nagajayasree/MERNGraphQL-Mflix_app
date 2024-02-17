import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../queries/getMovies';

function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.movies.map(({ id, title, year }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  ));
}

export default Movies;
