import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_MOVIES } from '../queries/getMovies';
import { ADD_MOVIE } from '../mutations/movieMutation';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [type, setType] = useState('');

  const [addMovie] = useMutation(ADD_MOVIE, {
    variables: { title, summary, type },
    update(cache, { data: { addMovie } }) {
      const { movies }: any = cache.readQuery({ query: GET_MOVIES });
      cache.writeQuery({
        query: GET_MOVIES,
        data: { movies: [...movies, addMovie] },
      });
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || summary === '' || type === '') {
      return alert('Please fill in all fields');
    }
    // addMovie(title, summary, type);

    setTitle('');
    setSummary('');
    setType('');
  };

  return (
    <div>
      <h3>Add Movie</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
