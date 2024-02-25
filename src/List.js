const data = [
  {
    id: 1,
    name: 'kvn',
    age: 23,
  },
  {
    id: 2,
    name: 'jesus',
    age: 33,
  },
  {
    id: 3,
    name: 'mary',
    age: 43,
  },
  {
    id: 4,
    name: 'joseph',
    age: 55,
  },
];

function List() {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <h1 data-testid='names'>{data.name}</h1>
            <h2>{data.age}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default List;
