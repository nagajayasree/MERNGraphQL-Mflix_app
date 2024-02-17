import { useQuery } from '@apollo/client';
import { GET_USERS } from '../queries/getUsers';

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map(({ id, name, email }) => (
    <div key={id}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  ));
}

export default Users;
