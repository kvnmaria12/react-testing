function Props({ nameList }) {
  const renderList = nameList.map((list, i) => {
    return (
      <div key={i} className='list'>
        <h1>{list.listName}</h1>
      </div>
    );
  });

  return <div>{renderList}</div>;
}

export default Props;
