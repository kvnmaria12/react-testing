function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    const { id, name, email } = user;

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid='users'>{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
