import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        alignContent: 'space-around',
      }}
    >
      <Link style={{ textDecoration: 'none' }} to="/addMovie">
        Add Movie
      </Link>
    </div>
  );
}
