function List({ users }) {
  const renderList = users.map((user) => {
    return (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
      </div>
    );
  });

  return <div>{renderList}</div>;
}

export default List;
