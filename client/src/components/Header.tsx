import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/movies">Movies</Link>
      <Link to="/addMovie">Add Movie</Link>
    </div>
  );
}
